You might actually want to look at my other utility [cross-env](http://npm.im/cross-env). It's probably what you're really looking for :-)

# argv-set-env

Status:
[![npm version](https://img.shields.io/npm/v/argv-set-env.svg?style=flat-square)](https://www.npmjs.org/package/argv-set-env)
[![npm downloads](https://img.shields.io/npm/dm/argv-set-env.svg?style=flat-square)](http://npm-stat.com/charts.html?package=argv-set-env&from=2015-09-01)
[![Build Status](https://img.shields.io/travis/kentcdodds/argv-set-env.svg?style=flat-square)](https://travis-ci.org/kentcdodds/argv-set-env)
[![Code Coverage](https://img.shields.io/codecov/c/github/kentcdodds/argv-set-env.svg?style=flat-square)](https://codecov.io/github/kentcdodds/argv-set-env)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

Use in your config files to set environment variables cross-platform.

## Usage

I use this with my npm scripts:

```javascript
{
  "scripts": {
    "build": "webpack --set-env-NODE_ENV=production",
    "test": "karma start --set-env-COVERAGE=true --set-env-NODE_ENV=test"
  }
}
```

And then in my `webpack.config.js` file, at the very top I do:

```javascript
require('argv-set-env')()
```

Which in the case of `build` would set `NODE_ENV` to the string `'production'` and in the case of
`test` it would set `NODE_ENV` to the string `'test'` and `COVERAGE` to the boolean `true`.

### Options

You can optionally pass `options`:

```javascript
require('argv-set-env')({
  // I'm setting these to the defaults here
  // you could set them to whatever you want
  env: process.env, // the object to have variables set on
  argv: process.argv, // the array of arguments which have the arguments defined
  prefix: '--set-env', // the prefix used in the array of arguments defining variables to set
})
```

## LICENSE

MIT

