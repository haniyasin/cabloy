// export
export default {
  installFactory,
};

// installFactory
function installFactory(_Vue) {
  const Vue = _Vue;
  const ebLayoutButtonBase = Vue.prototype.$meta.module.get('a-layoutmobile').options.mixins.ebLayoutButtonBase;
  return {
    mixins: [ebLayoutButtonBase],
    data() {
      return {};
    },
    created() {
      this.$meta.eventHub.$on('appMenu:open', this.onAppMenuOpen);
    },
    beforeDestroy() {
      this.$meta.eventHub.$off('appMenu:open', this.onAppMenuOpen);
    },
    mounted() {
      this.openAppMenu();
    },
    methods: {
      onAppMenuOpen() {
        this.onPerformClick();
      },
      openAppMenu() {
        const view = this.getView();
        this.$meta.vueLayout.app_openHome({ view });
      },
    },
  };
}
