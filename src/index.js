module.exports = setEnv

function setEnv (options) {
  options = options || {}
  var argv = options.argv || process.argv
  var env = options.env || process.env
  var prefix = (options.prefix || '--set-env') + '-'

  argv
    .filter(function (a) { return a.indexOf(prefix) === 0 })
    .map(function (a) { return a.substring(prefix.length).split('=') })
    .forEach(function (a) { env[a[0]] = parseToPrimitive(a[1]) })
}

function parseToPrimitive (value) {
  try {
    return JSON.parse(value)
  } catch (e) {
    return value.toString()
  }
}

