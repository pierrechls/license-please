'use strict'

var fs = require('fs')
var path = require('path')
var output = require('./output')

var licensesFolder = path.join(__dirname, '..', 'licenses/')

var licenses = {}

fs.readdirSync(licensesFolder).forEach(file => {
  var license = require(licensesFolder + file)
  if (!licenses[license.name]) {
    licenses[license.name] = license.content
  } else {
    output.warning(`Warning : the license '${license.name}' seems to already exist`, true, true)
  }
})

module.exports = licenses
