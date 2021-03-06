/**
 * Perspective mixin
 */

var perspective = function perspective(value) {
  value = value || 'none';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%|\.)/gi;

  if (numRegex.test(value) && ('0' !== value)) {
    value = value.replace(numWithoutValue, function(match) {
      return match + 'px';
    });
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

perspective.vendors = ['webkit', 'moz'];


/**
 * Export mixin
 */

module.exports = perspective;
