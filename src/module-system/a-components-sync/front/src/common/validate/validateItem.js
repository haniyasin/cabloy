import validateComputed from './validateComputed.js';
import renderProperties from './render/renderProperties.js';
import renderComponent from './render/renderComponent.js';
import renderGroup from './render/renderGroup.js';
import renderPanel from './render/renderPanel.js';
import renderText from './render/renderText.js';
import renderDatepicker from './render/renderDatepicker.js';
import renderFile from './render/renderFile.js';
import renderToggle from './render/renderToggle.js';
import renderSelect from './render/renderSelect.js';
import renderLink from './render/renderLink.js';
import renderLanguage from './render/renderLanguage.js';
import renderCategory from './render/renderCategory.js';
import renderTags from './render/renderTags.js';
import renderResourceType from './render/renderResourceType.js';
import renderJson from './render/renderJson.js';
import renderDetails from './render/renderDetails.js';
import renderDetailsStat from './render/renderDetailsStat.js';
import renderAtom from './render/renderAtom.js';

export default {
  mixins: [
    validateComputed,
    renderProperties, renderComponent, renderGroup, renderPanel, renderText,
    renderDatepicker, renderFile, renderToggle, renderSelect, renderLink,
    renderLanguage, renderCategory, renderTags, renderResourceType,
    renderJson, renderDetails, renderDetailsStat, renderAtom,
  ],
  props: {
    parcel: {
      type: Object,
    },
    dataKey: {
      type: String,
    },
    property: {
      type: Object,
    },
    meta: {
      type: Object,
    },
    root: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      validate: null,
    };
  },
  created() {
    this.validate = this.getValidate();
  },
  beforeDestroy() {
    this.validate = null;
  },
  methods: {
    getValidate() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options._componentTag === 'eb-validate') break;
        parent = parent.$parent;
      }
      return parent;
    },
    getMetaValue(meta, metaKey, dataPath) {
      // 1. item
      const value = meta ? meta[metaKey] : undefined;
      if (value !== undefined) return value;
      // 2. validate
      const validateMeta = this.validate.meta && this.validate.meta.properties;
      if (!validateMeta) return undefined;
      // dataPath is empty
      if (!dataPath || !validateMeta[dataPath]) return undefined;
      // ok
      return validateMeta[dataPath][metaKey];
    },
    _handleComputed(parcel, key, property) {
      const ebComputed = property.ebComputed;
      if (!ebComputed) return;
      const deps = Array.isArray(ebComputed.dependencies) ? ebComputed.dependencies : ebComputed.dependencies.split(',');
      const immediate = !!ebComputed.immediate;
      this.computed_register(parcel, key, ebComputed.expression, deps, immediate);
    },
    getValue(parcel, key) {
      const property = parcel.properties[key];
      const _value = parcel.data[key];
      if (!property) {
        return _value;
      }
      this._handleComputed(parcel, key, property);
      if (!this.checkIfEmptyForSelect(_value)) return _value;
      if (this.checkIfEmptyForSelect(property.default)) return _value;
      return property.default;
    },
    setValue(parcel, key, value) {
      let property;
      if (parcel === this.parcel && key === this.dataKey && this.property) {
        property = this.property;
      } else {
        property = parcel.properties[key];
      }
      // value
      let _value;
      if (!property) {
        _value = value;
      } else {
        if (property.ebType === 'select' && this.checkIfEmptyForSelect(value)) {
          _value = null; // for distinguish from 0
        } else {
          if (property.type === 'number') {
            if (isNaN(value)) {
              _value = value;
            } else {
              _value = Number(value);
            }
          } else if (property.type === 'boolean') {
            _value = Boolean(value);
          } else {
            _value = value;
          }
        }
      }

      const _valueOld = parcel.data[key];

      this.$set(parcel.data, key, _value); // always set as maybe Object

      // dataSrc
      //   always set value for !property
      if (!property || property.type) {
        this.$set(parcel.dataSrc, key, _value);
      }

      if (_valueOld !== _value) {
        this.$emit('change', _value);
        this.validate.$emit('validateItem:change', key, _value);
      }
    },
    checkIfEmptyForSelect(value) {
      return value === '' || value === undefined || value === null;
    },
    adjustDataPath(dataPath) {
      if (!dataPath) return dataPath;
      if (dataPath[0] !== '/') return this.validate.dataPathRoot + dataPath;
      return dataPath;
    },
    getTitle(context, notHint) {
      const { meta, key, property } = context;
      const title = this.$text(property.ebTitle || key);
      // ignore panel/group/toggle
      const ebType = property.ebType;
      if (ebType === 'panel' || ebType === 'group' || ebType === 'group-flatten' || ebType === 'toggle') return title;
      // only edit
      if (this.validate.readOnly || property.ebReadOnly) return title;
      // hint
      if (!notHint) {
        // config
        const hint = this.getMetaValue(meta, 'hint') || this.$config.validate.hint;
        const hintOptional = hint.optional;
        const hintMust = hint.must;
        // check optional
        if (hintOptional && !property.notEmpty) {
          return `${title}${this.$text(hintOptional)}`;
        }
        // check must
        if (hintMust && property.notEmpty) {
          return `${title}${this.$text(hintMust)}`;
        }
      }
      // default
      return title;
    },
    getPlaceholder(context) {
      const { property } = context;
      if (this.validate.readOnly || property.ebReadOnly) return undefined;
      return property.ebDescription ? this.$text(property.ebDescription) : this.getTitle(context, true);
    },
    onSubmit(event) {
      this.validate.onSubmit(event);
    },
    getParcel() {
      return this.parcel || this.validate.parcel;
    },
    getContext({ parcel, key, property, meta }) {
      const dataPath = parcel.pathParent + key;
      const context = {
        validate: this.validate,
        validateItem: this,
        parcel,
        key,
        property,
        dataPath,
        meta,
        getTitle: notHint => {
          return this.getTitle(context, notHint);
        },
        getValue: name => {
          return this.getValue(parcel, name || key);
        },
        setValue: (value, name) => {
          this.setValue(parcel, name || key, value);
        },
        getMetaValue: metaKey => {
          return this.getMetaValue(meta, metaKey, dataPath);
        },
      };
      return context;
    },
    renderRoot(c) {
      if (!this.validate.ready) return c('div');
      // context
      const context = {
        parcel: this.getParcel(),
      };
      // renderProperties
      const children = this.renderProperties(c, context);
      const attrs = {
        form: true,
        noHairlinesMd: true,
        inlineLabels: !this.$config.form.floatingLabel,
      };
      return c('eb-list', {
        staticClass: 'eb-list-row',
        attrs,
        on: { submit: this.onSubmit },
      }, children);
    },
    renderItem(c) {
      if (!this.validate.ready) return c('div');
      // context
      const parcel = this.getParcel();
      const key = this.dataKey;
      const context = this.getContext({
        parcel,
        key,
        property: this.property || parcel.properties[key],
        meta: this.meta,
      });
      // renderItem
      return this._renderItem(c, context);
    },
    _renderItem(c, context) {
      const ebType = context.property.ebType;
      // ignore if not specified
      if (!ebType) return null;
      // render
      if (ebType === 'group') {
        // group
        return this.renderGroup(c, context);
      } else if (ebType === 'panel') {
        // panel
        return this.renderPanel(c, context);
      } else if (ebType === 'text') {
        // text
        return this.renderText(c, context);
      } else if (ebType === 'toggle') {
        // toggle
        return this.renderToggle(c, context);
      } else if (ebType === 'select') {
        // select
        return this.renderSelect(c, context);
      } else if (ebType === 'file') {
        // file
        return this.renderFile(c, context);
      } else if (ebType === 'datepicker') {
        // datepicker
        return this.renderDatepicker(c, context);
      } else if (ebType === 'link') {
        // link
        return this.renderLink(c, context);
      } else if (ebType === 'component') {
        // component
        return this.renderComponent(c, context);
      } else if (ebType === 'language') {
        // language
        return this.renderLanguage(c, context);
      } else if (ebType === 'category') {
        // category
        return this.renderCategory(c, context);
      } else if (ebType === 'tags') {
        // tags
        return this.renderTags(c, context);
      } else if (ebType === 'resourceType') {
        // resourceType
        return this.renderResourceType(c, context);
      } else if (ebType === 'json') {
        // json
        return this.renderJson(c, context);
      } else if (ebType === 'details') {
        // details
        return this.renderDetails(c, context);
      } else if (ebType === 'detailsStat') {
        // details
        return this.renderDetailsStat(c, context);
      } else if (ebType === 'atom') {
        // atom
        return this.renderAtom(c, context);
      }
      // not support
      return c('div', {
        domProps: {
          innerText: `not support: ${ebType}`,
        },
      });
    },
  },
};
