'use strict'

module.exports = function (licence, year, name) {
  var content = ''

  for (var line in licence) {
    licence[line] = licence[line].replace('<year>', year).replace('<fullname>', name)
    line > 0 ? content += '\n' : content += ''
    content += `${licence[line]}`
    line < licence.length - 1 ? content += '\n' : content += ''
  }

  return content;

}
