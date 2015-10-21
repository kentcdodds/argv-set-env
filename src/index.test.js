/* global describe, beforeEach, it */
import {expect} from 'chai'
import setEnv from './index'

describe(`setEnv`, () => {
  let env, argv
  beforeEach(() => {
    env = {}
    argv = getDefaultArgv()
  })

  it(`set variables on the given env`, () => {
    setEnv({argv, env})
    envHasDefaults(env)
  })

  it(`should allow for a different prefix`, () => {
    const prefix = '--something-else-entirely'
    argv = getDefaultArgv(prefix)
    setEnv({argv, env, prefix})
  })
})

function getDefaultArgv (prefix = '--set-env') {
  return [
    'node',
    'something',
    '--some-other-thing',
    `${prefix}-NODE_ENV=test`,
    `${prefix}-COVERAGE=true`,
    `${prefix}-BUILD_NUMBER=234`,
    'some additional things'
  ]
}

function envHasDefaults (env) {
  expect(env.NODE_ENV).to.equal('test')
  expect(env.COVERAGE).to.equal(true)
  expect(env.BUILD_NUMBER).to.equal(234)
}

