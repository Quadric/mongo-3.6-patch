Package.describe({
  name: 'quadric:mongo-3.6-patch',
  version: '1.0.0',
  prodOnly: false,
});

Package.onUse(api => {
  api.use('minimongo', 'server');
  api.use('isobuild:compiler-plugin');
  api.addFiles('mongo-support.js', 'server');
});

Package.registerBuildPlugin({
  name: 'mongo-support-3.6',
  use: ['minimongo'],
  sources: ['mongo-support.js'],
});
