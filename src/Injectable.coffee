
NamedFunction = require "NamedFunction"
setType = require "setType"

module.exports =
Injectable = NamedFunction "Injectable", (value) ->

  self =

    get: -> value

    inject: (newValue) ->
      value = newValue
      return

  setType self, Injectable
