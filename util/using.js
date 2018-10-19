/**
 * Created by rballantyne on 11/13/14.
 *
 * Support data-driven test cases.
 */

/**
 * Using function, supports data-driven test cases.
 *
 * Code stolen shamelessly from http://blog.jphpsf.com/2012/08/30/drying-up-your-javascript-jasmine-tests
 *
 * @param name A descriptor of the type of data values; appears in results.
 * @param values The data values that will be passed to your test.
 * @param func A function that receives a data value and houses the test cases that use it.
 */
module.exports = function (name, values, func) {
    for (var i = 0, count = values.length; i < count; i++) {
        if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
            values[i] = [values[i]];
        }
        func.apply(this, values[i]);
        jasmine.currentEnv_.currentSpec.description += ' (with "' + name + '" using ' + values[i].join(', ') + ')';
    }
};