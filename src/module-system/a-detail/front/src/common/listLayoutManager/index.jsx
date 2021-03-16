import Vue from 'vue';
import Base from './base.jsx';
import Page from './page.jsx';
import Layout from './layout.jsx';
import Bulk from './bulk.jsx';
const ebDetailActions = Vue.prototype.$meta.module.get('a-base').options.mixins.ebDetailActions;

// container: {
//   title,
//   mode,
//   atomId,
//   atom,
//   detailClass,
//   options,
//   layout,
// },

export default {
  mixins: [
    ebDetailActions,
    Base, Page, Layout, Bulk,
  ],
  data() {
    return {
    };
  },
  created() {
    this.layout_prepareConfig().then(() => {
      this.base.ready = true;
    });
  },
  beforeDestroy() {
    this.layout.instance = null;
    this.$emit('layoutManager:destroy');
  },
};
