#!/usr/bin/env node

const fsAction = require('../lib/fsAction');
const chalk = require('chalk');

console.log(`\n`);
const actions = [
  ['remove', '/build', 'Remove a folder called `build`.'],
  ['mkdir', '/build', 'Create a folder called `build`.'],
  ['copy', '/app', '/build/app', 'Copy the `app` folder to the `build` directory.'],
  ['copy', '/config', '/build/config', 'Copy the `config` folder to the `build` directory.'],
  ['rebuildNpmConfig', '/package.json' , '/build/package.json', 'Rebuild `package.json`'],
  ['copy', '/README.md' , '/build/README.md', 'Copy the `README.md` file to the `build` directory']
];
fsAction(actions);
console.log(`\n${chalk.bgGreen(chalk.black((' DONE ')))} ${chalk.green('Build complete.')}\n`);
