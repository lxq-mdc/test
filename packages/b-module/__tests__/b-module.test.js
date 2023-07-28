'use strict';

const bModule = require('..');
const assert = require('assert').strict;

assert.strictEqual(bModule(), 'Hello from bModule');
console.info('bModule tests passed');
