#!/usr/bin/env node

const fsAction = require('../lib/fsAction');
const chalk = require('chalk');
const path = require('path');
const base = path.resolve('.');
const toolRoot = path.resolve(`${__dirname}/../`);

console.log('\n');
const actions = [
  ['remove', `${base}/build`, 'Remove a folder called build.'],
  ['mkdir', `${base}/build`, 'Create a folder called build.'],
  ['mkdir', `${base}/build/ssl`, 'Create a folder called ssl.'],
  ['copy', `${base}/app`, '/build/app', 'Copy the app folder to the build directory.'],
  ['copy', `${base}/config`, '/build/config', 'Copy the config folder to the build directory.'],
  ['rebuildNpmConfig', `/package.json` , '/build/package.json', 'Rebuild package.json'],
  ['copy', `${toolRoot}/lib/vector/README.md` , '/build/README.md', 'Copy the README.md file to the build directory'],
  ['copy', `${toolRoot}/lib/vector/jscms.conf` , '/build/jscms.conf', 'Copy the jscms.conf file to the build directory'],
  ['copy', `${toolRoot}/lib/vector/nginx.log` , '/build/nginx.log', 'Copy the nginx.log file to the build directory']
];
fsAction(actions);
console.log(`\n${chalk.bgGreen(chalk.black((' DONE ')))} ${chalk.green('Build complete.')}\n`);
