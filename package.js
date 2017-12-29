Package.describe({
  name: "aldeed:http",
  summary: "Improves the core HTTP package",
  version: "0.2.3",
  git: "https://github.com/aldeed/meteor-http-extras"
});

Npm.depends({request: "2.47.0"});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use(['underscore', 'http']);
  api.addFiles('http-extras-common.js', ['client', 'server']);
  api.addFiles('http-extras-client.js', 'client');
  api.addFiles('http-extras-server.js', 'server');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use('webapp', 'server');
  api.use('underscore');
  api.use('random');
  api.use('jquery', 'client');
  api.use(['http', 'aldeed:http', 'test-helpers'], ['client', 'server']);

  api.addFiles('test_responder.js', 'server');
  api.addFiles('http-extras-tests.js', ['client', 'server']);
});
