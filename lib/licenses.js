'use strict'

var fs = require('fs')
var path = require('path')
var output = require('./output')

const LICENSES_FOLDER = './licenses/'
const LICENSES_FOLDER_RELATIVE = './../licenses/'

var licenses = {}

fs.readdirSync(LICENSES_FOLDER).forEach(file => {
  var license = require(LICENSES_FOLDER_RELATIVE + file)
  if (!licenses[license.name]) {
    licenses[license.name] = license.content
  } else {
    output.warning(`Warning : the license '${license.name}' seems to already exist`, true, true)
  }
})

module.exports = licenses
