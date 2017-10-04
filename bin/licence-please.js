#!/usr/bin/env node

/*********************/
/* licence-please.js */
/*********************/

var path = require('path')
var program = require('commander')
var pkg = require(path.join('../package'))

/**
 * Usage.
 */

var defaultYear = new Date().getFullYear()
var defaultName = '<NAME>'

program
  .version(pkg.version)
  .description('Simple CLI to easily generate a LICENCE file')
  .option('-l, --list', 'List existing licences')
  .option('-f, --force', 'Rewrite existing LICENCE')
  .option('-m, --model [model]', 'Choose a licence model', 'mit')
  .option('-y, --year [year]', 'Year for MIT licence', defaultYear)
  .option('-n, --name [name]', 'Name for MIT licence', defaultName)
  .parse(process.argv)

/**
 * Help.
 */

program.on('--help', function () {
 console.log()
})

program.parse(process.argv)

var list = program.list
var force = program.force
var licence = program.model
var year = program.year
var name = program.name

if (program.args.length > 0) return program.help()
if (list && (force || licence != 'mit')) return program.help()

var readmePlease = require(path.join('../lib'))
readmePlease(list, force, licence, year, name)
