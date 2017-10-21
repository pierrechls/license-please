var colors = require('colors')

colors.setTheme({
  info: 'gray',
  help: 'cyan',
  warning: 'yellow',
  error: 'red',
  success: 'green'
})

const BACK_LINE = '\n'

function format (text, backLineBefore, backLineAfter) {
  backLineBefore ? text = BACK_LINE + text : text = text
  backLineAfter ? text = text + BACK_LINE : text = text
  return text
}

module.exports = {
  classic: function (text, backLineBefore, backLineAfter) {
    console.log(format(text, backLineBefore, backLineAfter))
  },
  info: function (text, backLineBefore, backLineAfter) {
    console.log(format(text, backLineBefore, backLineAfter).info)
  },
  help: function (text, backLineBefore, backLineAfter) {
    console.log(format(text, backLineBefore, backLineAfter).help)
  },
  warning: function (text, backLineBefore, backLineAfter) {
    console.log(format(text, backLineBefore, backLineAfter).warning)
  },
  error: function (text, backLineBefore, backLineAfter) {
    console.log(format(text, backLineBefore, backLineAfter).error)
  },
  success: function (text, backLineBefore, backLineAfter) {
    console.log(format(text, backLineBefore, backLineAfter).success)
  }
}
