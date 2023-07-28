'use strict';

const aModule = require('..');
const assert = require('assert').strict;

assert.strictEqual(aModule(), 'Hello from aModule');
console.info('aModule tests passed');
