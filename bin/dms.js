#!/usr/bin/env node

process.title = 'dms';

require('commander')
.version(require('../package').version)
.usage('<command> [options]')
.command('generate', 'generate file from a template, (command will generate file current folder)')
.parse(process.argv)


require('./dms-generate');