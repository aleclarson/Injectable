
function Injectable(defaultValue) {
  var value = defaultValue;
  return {
    get: function() {
      return value;
    },
    inject: function(newValue) {
      value = newValue;
    },
  };
}

module.exports = Injectable;
