/**
 * ColumnRule mixin
 */

var columnRule = function columnRule(value) {
  value = value || 'medium none black';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%|\.)/gi;

  if (/^[^, ]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

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

columnRule.vendors = ['webkit', 'moz'];


/**
 * Export mixin
 */

module.exports = columnRule;
