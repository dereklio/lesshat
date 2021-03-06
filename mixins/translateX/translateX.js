/**
 * TranslateX mixin
 */

var translateX = function translateX(value) {
  value = value || '0';
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
 * Result settings
 */

translateX.result = {
  property: 'transform',
  value: 'translateX({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

translateX.vendors = ['webkit', 'moz', 'opera', 'ms'];

/**
 * Export mixin
 */

module.exports = translateX;
