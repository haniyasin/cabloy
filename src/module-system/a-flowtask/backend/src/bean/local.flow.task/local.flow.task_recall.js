module.exports = ctx => {
  const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class FlowTask {
    async _recall() {
      // user
      const user = this.contextTask._user;
      // flowTask
      const flowTask = this.contextTask._flowTask;
      const flowTaskId = flowTask.id;
      // specificFlag must be 2
      if (flowTask.specificFlag !== 2) ctx.throw(403);
      // must be the same user
      if (user && user.id !== 0 && user.id !== flowTask.userIdAssignee) {
        ctx.throw.module(moduleInfo.relativeName, 1002, flowTaskId);
      }
      // timeClaimed first
      if (!flowTask.timeClaimed) ctx.throw.module(moduleInfo.relativeName, 1004, flowTaskId);
      // check handled
      if (flowTask.flowTaskStatus !== 0) ctx.throw.module(moduleInfo.relativeName, 1005, flowTaskId);
      // handle
      await this._recall_handle();
      // notify
      this._notifyTaskHandlings(flowTask.userIdAssignee);
    }

    async _recall_handle() {
      // flowTask
      const flowTask = this.contextTask._flowTask;
      const flowTaskId = flowTask.id;
      // flowTaskHistory update
      this.contextTask._flowTaskHistory.flowTaskStatus = 1;
      this.contextTask._flowTaskHistory.timeHandled = new Date();
      this.contextTask._flowTaskHistory.handleStatus = 1;
      await this.modelFlowTaskHistory.update(this.contextTask._flowTaskHistory);
      // delete flowTask and flowTaskHistory
      await this.modelFlowTask.delete({ id: flowTaskId });
      await this.modelFlowTaskHistory.delete({ flowTaskId });
      // notify
      const _tasks = await ctx.model.query(
        `
          select id,userIdAssignee from aFlowTask
            where iid=? and deleted=0 and flowNodeId=? and id<>?
          `,
        [ctx.instance.id, flowTask.flowNodeId, flowTaskId]
      );
      for (const _task of _tasks) {
        this._notifyTaskClaimings(_task.userIdAssignee);
      }
      // delete other tasks
      await ctx.model.query(
        `
          delete from aFlowTask
            where iid=? and flowNodeId=? and id<>?
          `,
        [ctx.instance.id, flowTask.flowNodeId, flowTaskId]
      );
      await ctx.model.query(
        `
          update aFlowTaskHistory set deleted=1
            where iid=? and deleted=0 and flowNodeId=? and flowTaskId<>?
          `,
        [ctx.instance.id, flowTask.flowNodeId, flowTaskId]
      );
      // recall
      return await ctx.bean.flowTask._gotoFlowNodePrevious({
        nodeInstance: this.nodeInstance,
        rejectedNode: null,
        flowNodeRemark: 'Recalled',
      });
    }
  }
  return FlowTask;
};
