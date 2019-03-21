const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const getTime = require('../lib/time');
const base = path.resolve('.');

let actionFn = {
  remove: function(_path) {
    fs.removeSync(base + _path);
  },

  mkdir: function(_path) {
    fs.mkdirSync(base + _path);
  },

  copy: function(source, destination) {
    fs.copySync(base + source, base + destination);
  },

  rebuildNpmConfig: function(source, destination) {
    let fullSource = base + source;
    let fullDestination = base + destination;
    let json = JSON.parse(fs.readFileSync(fullSource, 'utf-8'));
    let newJson = {
      "name": "jscms-server-template",
      "version": json.version,
      "description": "jscms-server's template for jscms-cli",
      "private": true,
      "dependencies": json.dependencies,
      "devDependencies": {},
      "engines": json.engines,
      "scripts": {
        "start": json.scripts.start,
        "stop": json.scripts.stop
      },
      "repository": json.repository,
      "author": json.author,
      "license": json.license
    }
    fs.writeFileSync(fullDestination, JSON.stringify(newJson, null , 2));
  }
}

function fsAction(actions) {
  actions.forEach(a => {
    let actName = a[0];
    let aFn = actionFn[actName];
    let logMsg = a[a.length - 1];
    let parameter = a.splice(0);
    parameter.shift();
    parameter.pop();
    if ( typeof aFn === 'function' ) {
      aFn.apply(null, parameter);
      console.log(`${chalk.green(getTime())} ${logMsg}`);
    }
  });
}

module.exports = fsAction;
