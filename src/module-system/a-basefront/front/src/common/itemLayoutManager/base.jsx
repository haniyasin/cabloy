export default {
  data() {
    return {
      base: {
        configAtomBase: null,
        configAtomCms: null,
        configAtom: null,
        //
        item: null,
        atomClass: null,
        atomClassBase: null,
        module: null,
        validateSchema: null,
        //
        _atomIdMain: null,
        _atomMain: null,
        //
        _formActionBase: null,
      },
    };
  },
  computed: {
    base_ready() {
      return this.base.ready && this.base_userLabels && this.atomClassesAll && this.actionsAll;
    },
    base_userLabels() {
      return this.$store.getters['a/base/userLabels'];
    },
    base_atomIdMain() {
      return this.base._atomIdMain;
    },
    base_atomMain() {
      return this.container.options?.atomMain || this.base._atomMain;
    },
    base_flowTaskId() {
      return this.container.options?.flowTaskId;
    },
    base_formAction() {
      return this.container.options?.formAction;
    },
    base_formActionMain() {
      return this.container.options?.formActionMain;
    },
  },
  created() {
    this.$store.dispatch('a/base/getLabels');
  },
  methods: {
    async base_onInit() {
      // load atomClasses
      await this.$store.dispatch('a/base/getAtomClasses');
    },
    async base_loadAtomClass() {
      try {
        // check container first
        if (this.container.atomClass) {
          this.base.atomClass = this.container.atomClass;
        } else {
          this.base.atomClass = await this.$api.post('/a/base/atom/atomClass', {
            key: { atomId: this.container.atomId },
          });
        }
        const useStoreAtomClasses = await this.$store.use('a/basestore/atomClasses');
        this.base.atomClassBase = await useStoreAtomClasses.getAtomClassBase({ atomClass: this.base.atomClass });
        // module
        this.base.module = await this.$meta.module.use(this.base.atomClass.module);
        // not set: found
        // this.base.notfound = false;
        // ok
        return true;
      } catch (err) {
        this.base.notfound = true;
        return false;
      }
    },
    async base_loadItem() {
      try {
        // options
        let options = this.base_prepareReadOptions();
        // check create delay
        if (this.container.params?.createDelay) {
          // createDelayGetItem
          let createParams = this.container.params?.createDelay.dataOptions.createParams;
          options = { ...options, ...createParams.options };
          if (!this.base.validateSchema) {
            options.returnSchema = true;
          }
          createParams = { ...createParams, options };
          const res = await this.$api.post('/a/base/atom/default', createParams);
          if (options.returnSchema) {
            this.base.item = res.item;
            this.base.validateSchema = res.schema;
          } else {
            this.base.item = res;
          }
          // actions
          await this.actions_createDelayActions();
        } else {
          // item
          if (!this.base.validateSchema) {
            options = { ...options, returnSchema: true };
          }
          const res = await this.$api.post('/a/base/atom/read', {
            key: { atomId: this.container.atomId },
            atomClass: this.base.atomClass,
            options,
          });
          if (options.returnSchema) {
            this.base.item = res.item;
            this.base.validateSchema = res.schema;
          } else {
            this.base.item = res;
          }
          // actions
          await this.actions_fetchActions();
          // timeline, not use await
          this.timeline_loadData();
        }
        // found
        this.base.notfound = false;
        // ok
        return true;
      } catch (err) {
        console.error(err);
        this.base.item = null;
        this.base.notfound = true;
        return false;
      }
    },
    async base_loadFormAction() {
      if (!this.base.atomClassBase) return;
      if (!this.base_formAction) return;
      const useStoreAtomActions = await this.$store.use('a/basestore/atomActions');
      this.base._formActionBase = await useStoreAtomActions.getActionBase({
        atomClass: this.base.atomClass,
        name: this.base_formAction,
      });
    },
    async base_loadAtomMain() {
      if (!this.base.atomClassBase) return;
      if (!this.base.atomClassBase.detail) return;
      if (this.container.options?.atomMain) {
        this.base._atomIdMain = this.container.options?.atomMain.atomId;
        return;
      }
      const atomIdMainFieldName = this.base.atomClassBase.fields?.mappings?.atomIdMain;
      const atomIdMain = this.base.item[atomIdMainFieldName];
      this.base._atomIdMain = atomIdMain;
      const options = {};
      if (this.base_flowTaskId) {
        options.flowTaskId = this.base_flowTaskId;
      }
      if (this.base_formActionMain) {
        options.formAction = this.base_formActionMain;
      }
      this.base._atomMain = await this.$api.post('/a/base/atom/read', {
        key: { atomId: atomIdMain },
        atomClass: this.base.atomClassBase.detail.atomClassMain,
        options,
      });
    },
    base_prepareReadOptions() {
      // options
      const options = {};
      // layout
      options.layout = this.layout.current;
      // for detail
      options.containerMode = this.container.mode;
      // flowTaskId
      options.flowTaskId = this.base_flowTaskId;
      // formAction/formActionMain
      options.formAction = this.base_formAction;
      options.formActionMain = this.base_formActionMain;
      // need not atomIdMain
      // // atomIdMain
      // options.atomIdMain = this.base_atomIdMain;
      // options
      return options;
    },
    base_getCurrentStage() {
      if (!this.base.item) return null;
      return this.$meta.util.stageToString(this.base.item.atomStage);
    },
    // async base_onOpenDrafted(data) {
    //   const key = data.key;

    //   if (!this.base_ready) return;
    //   if (this.base.item.atomId !== key.atomId) return;

    //   await this.actions_fetchActions();
    // },
  },
};
