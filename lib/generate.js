'use strict'

module.exports = function (license, year, name) {
  var content = ''

  for (var line in license) {
    license[line] = license[line].replace('<year>', year).replace('<fullname>', name)
    line > 0 ? content += '\n' : content += ''
    content += `${license[line]}`
    line < license.length - 1 ? content += '\n' : content += ''
  }

  return content;

}
