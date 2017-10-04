'use strict'

var fs = require('fs')
var path = require('path')
var output = require('./output')
var generate = require('./generate')
var licenses = require('./licenses')

const LICENSE_FILE_NAME = 'LICENSE'

module.exports = function (list, force, license, year, name) {

    if (list) {
      output.help('List of possible licenses :')
      for (var licenseName in licenses) {
        output.help(`\t - ${licenseName}`, false, false)
      }
      output.help('', false, false)
      return
    }

    // If the selected license exists
    if (licenses.hasOwnProperty(license)) {
      var content = generate(licenses[license], year, name)

      fs.access(LICENSE_FILE_NAME, fs.constants.F_OK, (err) => {
        // if file already exists
        if (!err && !force) {
          output.warning('A LICENSE file already exists', true, false)
          output.help(`Use --force option to overwrite it with the '${license}' license`, false, true)
        } else {
          fs.writeFile(LICENSE_FILE_NAME, content, function(err) {
            err ? output.error(err) : output.success(`New LICENSE file generated with the '${license}' license`)
          })
        }
      })

    } else {
      output.error(`The '${license}' license doesn't seem to exist`)
    }
}
