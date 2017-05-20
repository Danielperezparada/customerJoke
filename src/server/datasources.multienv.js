
module.exports = (() => {
  const config = {};

  config.db = {};
  config.db.connector = 'mongodb';
  config.db.port = 27017;
  config.db.hostname = 'db';
  config.db.database = 'customerJoke';

  if (process.env.npm_config_db === 'dev-mode') {
    config.db.hostname = 'localhost';
  }

  return config;
})();
