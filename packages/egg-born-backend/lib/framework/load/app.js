const path = require('path');
const AppWorkerLoader = require('egg').AppWorkerLoader;
const LoadModulesFn = require('../../module');
const ModuleInfoFn = require('../moduleInfo.js');

module.exports = class CustomAppWorkerLoader extends AppWorkerLoader {
  // constructor(opt) {
  //   super(opt);
  // }
  loadConfig() {
    super.loadConfig();
    this.app.subdomainOffset = typeof this.config.subdomainOffset === 'undefined' ? 2 : this.config.subdomainOffset;
    ModuleInfoFn(this.app);
  }
  load() {
    super.load();
    // load modules
    LoadModulesFn(this);
  }
  getAppname() {
    if (!this.pkgCabloy) {
      this.pkgCabloy = require(path.join(process.cwd(), 'package.json'));
      this.pkg.name = this.pkgCabloy.name;
    }
    return this.pkgCabloy.name;
  }
};
