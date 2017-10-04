#!/usr/bin/env node

/*********************/
/* license-please.js */
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
  .description('Simple CLI to easily generate a LICENSE file')
  .option('-l, --list', 'List existing licenses')
  .option('-f, --force', 'Rewrite existing LICENSE')
  .option('-m, --model [model]', 'Choose a license model', 'mit')
  .option('-y, --year [year]', 'Year for MIT license', defaultYear)
  .option('-n, --name [name]', 'Name for MIT license', defaultName)
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
var license = program.model
var year = program.year
var name = program.name

if (program.args.length > 0) return program.help()
if (list && (force || license != 'mit')) return program.help()

var readmePlease = require(path.join('../lib'))
readmePlease(list, force, license, year, name)
