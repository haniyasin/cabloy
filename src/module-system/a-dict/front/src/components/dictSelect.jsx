export default {
  props: {
    dict: {},
    leafOnly: {},
    disabledCodes: {},
    selectedCodes: {},
    checkbox: {
      default: true,
    },
    checkOnLabel: {
      default: false,
    },
    multiple: {},
    maxLevelAutoOpened: {
      default: 0,
    },
  },
  data() {
    return {
      inited: false,
    };
  },
  computed: {
    selectedCodesArray() {
      const selectedCodes = this.selectedCodes;
      if (selectedCodes === undefined || selectedCodes === null) return null;
      if (Array.isArray(selectedCodes)) return selectedCodes;
      return [selectedCodes];
    },
  },
  mounted() {
    this.init(this.selectedCodesArray);
  },
  methods: {
    getInstance() {
      return this.$refs.tree;
    },
    async init(selectedCodesArray) {
      // root
      const root = {
        attrs: {
          itemToggle: false,
          selectable: false,
          multiple: this.multiple,
          checkbox: this.checkbox,
          checkOnLabel: true,
        },
      };
      // load
      const tree = this.getInstance();
      await tree.load(root);
      // checkNodes
      await this.selectDictItems(selectedCodesArray);
      // inited
      this.inited = true;
    },
    async reload() {
      await this.init(null);
    },
    _findChildren(children, categoryId) {
      for (const item of children) {
        if (item.id === categoryId) return item.children;
        if (item.children) {
          const res = this._findChildren(item.children, categoryId);
          if (res) return res;
        }
      }
      return null;
    },
    async _createNodeChildren(children, nodeParent, treeviewData) {
      if (!children) return [];
      // level
      const levelCurrent = nodeParent.__level || 0;
      const level = levelCurrent + 1;
      // nodes
      const nodes = [];
      for (const item of children) {
        const isCatalog = !!item.children;
        const checkbox = !this.leafOnly || !isCatalog;
        const checkboxShow = this.checkbox && checkbox;
        const folder = !checkbox && isCatalog;
        const nodeId = this._getNodeIdFromCode(item.codeFull);
        const disabled = this.disabledCodes && this.disabledCodes.indexOf(item.codeFull) > -1;
        const node = {
          id: nodeId,
          attrs: {
            id: treeviewData._calcNodeAttrId(nodeParent, { id: this._getNodeIdFromCode(item.code) }),
            label: item.titleLocale || item.title,
            toggle: isCatalog,
            loadChildren: isCatalog,
            checkbox: checkboxShow,
            checkOnLabel: this.checkOnLabel,
            selectable: checkbox,
            itemToggle: !checkbox,
            folder,
            disabled,
          },
          data: item,
          __level: level,
        };
        if (isCatalog && (level <= this.maxLevelAutoOpened || this.maxLevelAutoOpened === -1)) {
          await treeviewData._preloadChildren(node);
        }
        nodes.push(node);
      }
      return nodes;
    },
    _getNodeIdFromCode(code) {
      if (typeof code === 'string') {
        code = code.replace(/\/:/g, '_');
      }
      return code;
    },
    async onLoadChildren(node, treeviewData) {
      if (node.root) {
        return await this._createNodeChildren(this.dict._dictItems, node, treeviewData);
      }
      // children
      return await this._createNodeChildren(node.data.children, node, treeviewData);
    },
    onNodeClick(node) {
      this.$emit('dictItemClick', node);
    },
    onNodeChange(node) {
      const tree = this.getInstance();
      const checkedNodes = tree.checked();
      this.$emit('dictItemChange', node, checkedNodes);
    },
    async onPerformClearSelected() {
      const tree = this.getInstance();
      const checkedNodes = tree.checked();
      const nodeIds = checkedNodes.map(item => item.id);
      await tree.uncheckNodes(nodeIds);
      this.$emit('dictClearSelected', null);
    },
    async selectDictItems(codes) {
      if (!codes || codes.length === 0) return;
      const tree = this.getInstance();
      await tree.checkNodes(codes, true, true);

      // const codes = String(code).split('/');
      // let nodeParent = tree.treeviewRoot;
      // for (let index = 0; index < codes.length; index++) {
      //   // force load children
      //   await tree._loadChildren(nodeParent);
      //   // find
      //   nodeParent = nodeParent.children.find(item => {
      //     const codeFull = item.codeFull;
      //     return codeFull === codes.slice(0, index + 1).join('/');
      //   });
      //   if (!nodeParent) break;
      // }
      // if (nodeParent) {
      //   await tree.checkNodes([nodeParent.id], false, true);
      //   this.$nextTick(() => {
      //     const $el = tree.getElementByNode(nodeParent);
      //     if ($el.length > 0) {
      //       $el[0].scrollIntoView({
      //         block: 'center',
      //         behavior: 'smooth',
      //       });
      //     }
      //   });
      // }
    },
    _renderClearSelected() {
      if (!this.selectedCodesArray || this.selectedCodesArray.length === 0) return null;
      return <eb-button propsOnPerform={this.onPerformClearSelected}>{this.$text('Clear Selected')}</eb-button>;
    },
    _renderDictTree() {
      return (
        <eb-treeview
          ref="tree"
          auto={false}
          propsOnLoadChildren={this.onLoadChildren}
          onNodeClick={this.onNodeClick}
          onNodeChange={this.onNodeChange}
        ></eb-treeview>
      );
    },
  },
  render() {
    const domClearSelected = this._renderClearSelected();
    const domDictTree = this._renderDictTree();
    return (
      <div>
        {domClearSelected}
        {domDictTree}
      </div>
    );
  },
};

// _createNodeRoot(children) {
//   const checkbox = !this.leafOnly;
//   return [
//     {
//       id: 0,
//       attrs: {
//         label: this.$text('Root'),
//         toggle: true,
//         loadChildren: true,
//         checkbox,
//         checkOnLabel: checkbox,
//         selectable: checkbox,
//         itemToggle: !checkbox,
//         disabled: false,
//       },
//       data: {
//         id: 0,
//         categoryCatalog: 1,
//         children,
//       },
//     },
//   ];
// },
