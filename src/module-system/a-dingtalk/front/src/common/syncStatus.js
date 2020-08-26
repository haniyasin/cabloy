export default {
  data() {
    return {
      syncStatus: null,
    };
  },
  created() {
    this.$api.post('contacts/syncStatus').then(res => {
      this.syncStatus = res;
    });
  },
  mounted() {
    this.$meta.eventHub.$on('dingtalk:contacts:sync', this.onStatusChanged);
  },
  beforeDestroy() {
    this.$meta.eventHub.$off('dingtalk:contacts:sync', this.onStatusChanged);
  },
  methods: {
    onStatusChanged(data) {
      this.syncStatus = {
        ...this.syncStatus,
        ...data,
      };
    },
  },
};
