#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk')
const dms = require('../src/generate');


/**
 * Usage.
 */

program
.command('generate')
.description('quick generate your file')
.alias('g')
.action(function(type, name){
    dms.run(type, name);
});
program.parse(process.argv);