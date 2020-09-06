module.exports = function(app) {

  class BroadcastClient {

    constructor() {
      this.__callerId = app.meta.workerId;
      this.channelName = null;
      this.sub = null;
      this.pub = null;
      this.init();
    }

    init() {
      this.channelName = `broadcast_${app.name}:`;
      this.pub = app.redis.get('broadcast').duplicate();
      this.sub = app.redis.get('broadcast').duplicate();
      this.sub.subscribe(this.channelName, function() {});
      this.sub.on('message', (channel, info) => {
        this._performTasks(JSON.parse(info)).then(() => {
          // do nothing
        }).catch(err => {
          app.logger.error(err);
        });
      });
    }

    // { subdomain, module, broadcastName, data }
    emit(info) {
      info.__callerId = this.__callerId;
      this.pub.publish(this.channelName, JSON.stringify(info));
    }

    async _performTasks({ __callerId, locale, subdomain, module, broadcastName, data }) {
      // context
      const context = { data };
      if (__callerId === this.__callerId) {
        context.sameAsCaller = true;
      }
      // broadcasts
      const broadcastArray = app.meta.broadcasts[`${module}:${broadcastName}`];
      if (!broadcastArray) return;
      // loop
      for (const broadcast of broadcastArray) {
        await this._performTask({ broadcast, context, locale, subdomain });
      }
    }

    async _performTask({ broadcast, context, locale, subdomain }) {
      const bean = broadcast.bean;
      // ctx
      const ctx = await app.meta.util.createAnonymousContext({ locale, subdomain, module: bean.module });
      // bean
      const beanInstance = ctx.bean._getBean(`${bean.module}.broadcast.${bean.name}`);
      // execute
      await beanInstance.execute(context);
    }
  }

  return BroadcastClient;
};

