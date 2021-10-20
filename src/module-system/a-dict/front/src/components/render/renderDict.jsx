export default {
  props: {
    context: {
      type: Object,
    },
  },
  data() {
    return {
      dict: null,
      dictItem: null,
      dictItemTitle: null,
    };
  },
  computed: {
    value() {
      return this.context.getValue();
    },
  },
  watch: {
    context() {
      this._loadDict();
    },
    value() {
      this._loadDictItem();
    },
  },
  created() {
    this._loadDict();
  },
  methods: {
    async _loadDict() {
      const { property, validate } = this.context;
      const dictKey = property.ebParams.dictKey;
      if (!validate.readOnly && !property.ebReadOnly) {
        this.dict = await this.$store.dispatch('a/dict/getDict', { dictKey });
      }
      // load dict item
      await this._loadDictItem();
    },
    async _loadDictItem() {
      const { key, property, validate } = this.context;
      const dictKey = property.ebParams.dictKey;
      if (validate.readOnly || property.ebReadOnly) {
        this.dictItemTitle = this.context.getValue(`_${key}TitleLocale`);
      } else {
        const code = this.context.getValue();
        const separator = property.ebParams.separator;
        this.dictItem = await this.$store.dispatch('a/dict/findItem', { dictKey, code, options: { separator } });
        this.dictItemTitle = this.dictItem ? this.dictItem.titleLocaleFull : null;
      }
    },
    async onChooseDictItem() {
      const { key, property } = this.context;
      const leafOnly = property.ebParams.separator;
      const title = this.context.getTitle();
      // selectedCategoryIds
      const code = this.value;
      const selectedCodes = code ? [code] : [];
      // select
      return new Promise(resolve => {
        const url = '/a/dict/dict/select';
        this.$view.navigate(url, {
          target: '_self',
          context: {
            params: {
              title,
              dict: this.dict,
              leafOnly,
              selectedCodes,
            },
            callback: async (code, node) => {
              if (code === 200) {
                this._onChangeDictItem(node.id);
                resolve(true);
              } else if (code === false) {
                resolve(false);
              }
            },
          },
        });
      });
    },
    onSelectChange(value) {
      this._onChangeDictItem(value);
    },
    async _onChangeDictItem(value) {
      const { key } = this.context;
      const fieldTitle = `_${key}Title`;
      const fieldTitleLocale = `_${key}TitleLocale`;
      if (value) {
        this.context.setValue(value, key);
        await this._loadDictItem();
        this.context.setValue(this.dictItem.titleFull, fieldTitle);
        this.context.setValue(this.dictItem.titleLocaleFull, fieldTitleLocale);
      } else {
        this.context.setValue(null, key);
        this.context.setValue('', fieldTitle);
        this.context.setValue('', fieldTitleLocale);
      }
    },
    _renderAsSelect() {
      const { parcel, key, property } = this.context;
      const options = this.dict._dictItems.map(item => {
        return {
          title: item.titleLocale,
          value: item.code,
        };
      });
      const propertyNew = this.$utils.extend({}, property, {
        ebType: 'select',
        ebOptions: options,
        ebParams: null,
      });
      return (
        <eb-list-item-validate
          parcel={parcel}
          dataKey={key}
          property={propertyNew}
          onChange={this.onSelectChange}
        ></eb-list-item-validate>
      );
    },
    _renderAsTree() {
      const { dataPath } = this.context;
      const title = this.context.getTitle();
      return (
        <eb-list-item-choose link="#" dataPath={dataPath} title={title} propsOnChoose={this.onChooseDictItem}>
          <div slot="after">{this.dictItemTitle}</div>
        </eb-list-item-choose>
      );
    },
  },
  render() {
    const { property, validate } = this.context;
    // readOnly
    if (validate.readOnly || property.ebReadOnly) {
      const title = this.context.getTitle();
      return (
        <f7-list-item title={title}>
          <div slot="after">{this.dictItemTitle}</div>
        </f7-list-item>
      );
    }
    // write
    if (!this.dict) return <div></div>;
    const mode = property.ebParams && property.ebParams.mode;
    if (!mode || mode === 'select') {
      return this._renderAsSelect();
    }
    return this._renderAsTree();
  },
};
