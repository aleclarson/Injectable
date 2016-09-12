var Injectable, NamedFunction, setType;

NamedFunction = require("NamedFunction");

setType = require("setType");

module.exports = Injectable = NamedFunction("Injectable", function(value) {
  var self;
  self = {
    get: function() {
      return value;
    },
    inject: function(newValue) {
      value = newValue;
    }
  };
  return setType(self, Injectable);
});

//# sourceMappingURL=map/Injectable.map
