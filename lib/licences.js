'use strict'

var fs = require('fs')
var path = require('path')
var output = require('./output')

const LICENCES_FOLDER = './licences/'
const LICENCES_FOLDER_RELATIVE = './../licences/'

var licences = {}

fs.readdirSync(LICENCES_FOLDER).forEach(file => {
  var licence = require(LICENCES_FOLDER_RELATIVE + file)
  if (!licences[licence.name]) {
    licences[licence.name] = licence.content
  } else {
    output.warning(`Warning : the licence '${licence.name}' seems to already exist`)
  }
})

module.exports = licences
