#!/usr/bin/env node

const config = require('@guahanweb/js-configs');
const path = require('path');

const cwd = path.resolve('../', __filename);

require('@babel/register')({
    extensions: ['.ts', '.js'],
    ...config.babel,
    only: [(path) => path.includes('packages')],
    cwd,
});

const cli = require('../src').main;
cli().catch((e) => console.log(e));
