Package.describe({
  name: "http-extras",
  summary: "Improves the core HTTP package"
});

Package.on_use(function (api) {
  api.use(['underscore', 'http']);
  api.add_files('http-extras-common.js', ['client', 'server']);
  api.add_files('http-extras-client.js', 'client');
  api.add_files('http-extras-server.js', 'server');
});

Package.on_test(function (api) {
  api.use('webapp', 'server');
  api.use('underscore');
  api.use('random');
  api.use('jquery', 'client');
  api.use(['http', 'http-extras', 'test-helpers'], ['client', 'server']);

  api.add_files('test_responder.js', 'server');
  api.add_files('http-extras-tests.js', ['client', 'server']);
});