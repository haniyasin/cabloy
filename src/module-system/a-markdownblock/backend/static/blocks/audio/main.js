(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? (module.exports = factory()) : typeof define === 'function' && define.amd ? define(factory) : null;
})(this, function () {
  class Audio {
    APlayer = null;

    render() {
      return '<div class="aplayer"></div>';
    }

    mount(host) {
      const { $container, $content, $util } = host;
      return this._loadAPlayer().then(APlayer => {
        const $player = $container.querySelector('.aplayer');
        // content
        if (!$content.audio) return;
        $content.container = $player;
        // audio
        if (!Array.isArray($content.audio)) {
          $content.audio = [$content.audio];
        }
        for (const audio of $content.audio) {
          audio.name = $util.escapeHtml(audio.name);
          audio.url = $util.escapeURL(audio.url);
          audio.artist = $util.escapeHtml(audio.artist);
          audio.cover = $util.escapeURL(audio.cover);
          if (!audio.cover) audio.cover = $util.url('api/static/a/base/img/audio_cover.jpg');
        }
        // create
        new APlayer($content);
      });
    }

    _loadAPlayer() {
      if (this.APlayer) return Promise.resolve(this.APlayer);
      return new Promise(resolve => {
        require.config({
          paths: {
            APlayer: 'api/static/a/markdownblock/blocks/audio/aplayer/aplayer-1.10.1.min',
            APlayer_CSS: 'api/static/a/markdownblock/blocks/audio/aplayer/aplayer-1.10.1.min',
            AudioMain_CSS: 'api/static/a/markdownblock/blocks/audio/main',
          },
        });
        require(['APlayer', 'css!APlayer_CSS', 'css!AudioMain_CSS'], APlayer => {
          this.APlayer = APlayer;
          resolve(APlayer);
        });
      });
    }
  }
  return Audio;
});
