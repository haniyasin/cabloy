const config = require('./config/config.js');
const locales = require('./config/locales.js');
const errors = require('./config/errors.js');

// eslint-disable-next-line
const beans = require('./beans.js');
const routes = require('./routes.js');
const controllers = require('./controllers.js');
const services = require('./services.js');

module.exports = app => {
  // models
  const models = require('./models.js');
  return {
    beans,
    routes,
    controllers,
    services,
    models,
    config,
    locales,
    errors,
  };
};
