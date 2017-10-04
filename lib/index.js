'use strict'

var fs = require('fs')
var path = require('path')
var output = require('./output')
var generate = require('./generate')
var licences = require('./licences')

const LICENCE_FILE_NAME = 'LICENCE'

module.exports = function (list, force, licence, year, name) {

    if (list) {
      output.help('List of possible licenses :')
      for (var licenceName in licences) {
        output.help(`\t - ${licenceName}`, false, false)
      }
      output.help('', false, false)
      return
    }

    // If the selected licence exists
    if (licences.hasOwnProperty(licence)) {
      var content = generate(licences[licence], year, name)

      fs.access(LICENCE_FILE_NAME, fs.constants.F_OK, (err) => {
        // if file already exists
        if (!err && !force) {
          output.warning('A LICENCE file already exists', true, false)
          output.help(`Use --force option to overwrite it with the '${licence}' licence`, false, true)
        } else {
          fs.writeFile(LICENCE_FILE_NAME, content, function(err) {
            err ? output.error(err) : output.success(`New LICENCE file generated with the '${licence}' licence`)
          })
        }
      })

    } else {
      output.error(`The '${licence}' licence doesn't seem to exist`)
    }
}
