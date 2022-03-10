const require3 = require('require3');
const uuid = require3('uuid');

module.exports = ctx => {
  const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Progress extends ctx.app.meta.BeanModuleBase {
    constructor(moduleName) {
      super(ctx, 'progress');
      this.moduleName = moduleName || ctx.module.info.relativeName;
    }

    get configModule() {
      return ctx.config.module(moduleInfo.relativeName);
    }

    get redis() {
      if (!this._redis) this._redis = ctx.app.redis.get('io') || ctx.app.redis.get('cache');
      return this._redis;
    }

    _getRedisKey({ progressId }) {
      return `progress:${ctx.instance.id}:${progressId}`;
    }

    async _getRedisValue({ progressId }) {
      const key = this._getRedisKey({ progressId });
      const content = await this.redis.get(key);
      return content ? JSON.parse(content) : null;
    }

    async _setRedisValue({ progressId, content, contentOld }) {
      const expireTime = this.configModule.progress.expireTime;
      const key = this._getRedisKey({ progressId });
      if (contentOld) {
        content = Object.assign({}, contentOld, content);
      }
      await this.redis.set(key, JSON.stringify(content), 'PX', expireTime);
    }

    async _updateRedisValue({ progressId, content }) {
      const contentOld = await this._getRedisKey({ progressId });
      await this._setRedisValue({ progressId, content, contentOld });
    }

    async create() {
      if (!ctx.state.user || !ctx.state.user.op) return ctx.throw(403);
      const progressId = uuid.v4().replace(/-/g, '');
      await this._setRedisValue({
        progressId,
        content: {
          userId: ctx.state.user.op.id,
          counter: 0,
          done: 0,
          abort: 0,
          data: null,
        },
      });
      // ok
      return progressId;
    }

    async update({ progressId, progressNo = 0, total, progress, text }) {
      const item = await this._getRedisKey({ progressId });
      if (!item) {
        // same as abort
        // 1001: 'Operation Aborted',
        ctx.throw.module(moduleInfo.relativeName, 1001);
      }
      // abort
      if (item.abort) {
        // 1001: 'Operation Aborted',
        ctx.throw.module(moduleInfo.relativeName, 1001);
      }
      // data
      const data = item.data || [];
      if (data.length > progressNo + 1) {
        data.splice(progressNo + 1, data.length - progressNo - 1);
      }
      data[progressNo] = { total, progress, text };
      // update
      await this._setRedisValue({
        progressId,
        content: {
          counter: item.counter + 1,
          data,
        },
        contentOld: item,
      });
      // publish
      const ioMessage = {
        userIdTo: item.userId,
        content: {
          ...item,
          counter: item.counter + 1,
          data,
        },
      };
      await this._publish({ progressId, ioMessage });
    }

    async done({ progressId, message }) {
      const item = await this._getRedisKey({ progressId });
      if (!item) {
        // same as abort
        // 1001: 'Operation Aborted',
        ctx.throw.module(moduleInfo.relativeName, 1001);
      }
      // data
      const data = { message };
      // update
      await this._setRedisValue({
        progressId,
        content: {
          counter: item.counter + 1,
          done: 1,
          data,
        },
        contentOld: item,
      });
      // publish
      const ioMessage = {
        userIdTo: item.userId,
        content: {
          ...item,
          counter: item.counter + 1,
          done: 1,
          data,
        },
      };
      await this._publish({ progressId, ioMessage });
    }

    async error({ progressId, message }) {
      const item = await this._getRedisKey({ progressId });
      if (!item) {
        // same as abort
        // 1001: 'Operation Aborted',
        ctx.throw.module(moduleInfo.relativeName, 1001);
      }
      // data
      const data = { message };
      // update
      await this._setRedisValue({
        progressId,
        content: {
          counter: item.counter + 1,
          done: -1,
          data,
        },
        contentOld: item,
      });
      // publish
      const ioMessage = {
        userIdTo: item.userId,
        content: {
          ...item,
          counter: item.counter + 1,
          done: -1,
          data,
        },
      };
      await this._publish({ progressId, ioMessage });
    }

    async _publish({ progressId, ioMessage }) {
      await ctx.bean.io.publish({
        path: `/a/progress/update/${progressId}`,
        message: ioMessage,
        messageClass: {
          module: moduleInfo.relativeName,
          messageClassName: 'progress',
        },
      });
    }
  }
  return Progress;
};
