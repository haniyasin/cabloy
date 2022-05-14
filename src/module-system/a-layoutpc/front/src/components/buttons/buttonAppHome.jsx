// export
export default {
  installFactory,
};

// installFactory
function installFactory(_Vue) {
  const Vue = _Vue;
  const ebLayoutButtonBase = Vue.prototype.$meta.module.get('a-layoutpc').options.mixins.ebLayoutButtonBase;
  return {
    mixins: [ebLayoutButtonBase],
    data() {
      return {};
    },
    created() {},
    methods: {
      onPerform() {
        this.$meta.vueLayout.openHome();
      },
    },
    render() {
      return (
        <eb-link
          class={this.buttonClass}
          iconMaterial={this.buttonIcon && this.buttonIcon.material}
          iconF7={this.buttonIcon && this.buttonIcon.f7}
          tooltip={this.buttonTooltip}
          propsOnPerform={this.onPerform}
        ></eb-link>
      );
    },
  };
}
