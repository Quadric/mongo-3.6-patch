const fs = Npm.require('fs');
// const { fs } = Plugin;

const runtime = typeof Plugin === 'undefined';

const filePath = runtime
  ? 'packages/minimongo.js'
  : '.meteor/local/build/programs/server/packages/minimongo.js';

if (!fs.existsSync(filePath)) {
  return; // exit
}

let content = fs.readFileSync(filePath).toString('utf8');

if (content.indexOf('$v') === -1) {
  content = content.replace('$bit(', '$v() {},\n  $bit(');
  fs.chmodSync(filePath, 0755);
  fs.writeFileSync(filePath, content);
  console.log(
    `patch "mongo-support-3.6" applied during ${runtime ? 'runtime' : 'the build process'}`
  );
}
