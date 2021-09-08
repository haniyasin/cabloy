import Editor from '../components/editor.jsx';
export default {
  components: {
    Editor,
  },
  data() {
    return {
      // readOnly: true,
      readOnly: false,
      toolbar: true,
      content: `
## hello world

$$$ a-markdownblock:audio
{
  loop: true,
  audio: {
    url: 'https://admin2.zhennann.com/api/a/file/file/download/f8455b043bab4194a84434ed4ec22a89.mp3',
    name: 'Within You\\'ll Remain',
    cover: 'https://admin2.zhennann.com/api/a/file/file/download/044b07e37cc74a02806bf3e4e818aa41.jpg',
    artist: 'Tokyo Square',
  },
  autoplay: true,
}
$$$

$$$ a-markdownblock:iframe
{
  height: '200px',
  width: '100%',
  url: 'https://zhennann.com/',
}
$$$

- [x] shopping
- [ ] gaming

This is a test

\`\`\` javascript
const i = 1;
\`\`\`
`,
    };
  },
  methods: {
    onPerformSwitch() {
      this.toolbar = !this.toolbar;
    },
  },
  render() {
    return (
      <eb-page>
        <eb-navbar title={this.$text('Demo')} eb-back-link="Back">
          <f7-nav-right>
            <eb-link propsOnPerform={this.onPerformSwitch}>{this.$text('Switch')}</eb-link>
          </f7-nav-right>
        </eb-navbar>
        <Editor
          style={{ height: '400px' }}
          readOnly={this.readOnly}
          toolbar={this.toolbar}
          onToolbar={value => (this.toolbar = value)}
          value={this.content}
          onInput={value => (this.content = value)}
        ></Editor>
        <textarea vModel={this.content} style="border:1px solid gray; width:100%;height:200px;"></textarea>
      </eb-page>
    );
  },
};
