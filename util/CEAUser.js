/**
 * Created by rballantyne on 11/6/14.
 *
 * Data storage object that holds information about a CEA user.
 */

var StringUtil = require('./stringUtils');

/**
 * Constructor function for a CEAUser data object
 *
 * @param userInfo An object with any combination of:
 *          username
 *          password
 *          firstname
 *          lastname
 *          email
 *        Missing values will be assigned an empty string.
 */
module.exports = function (userInfo) {
    this.username = userInfo.username || '';
    this.password = userInfo.password || '';
    this.firstname = userInfo.firstname || '';
    this.lastname = userInfo.lastname || '';
    this.email = userInfo.email || '';

    this.toString = function () {
        return StringUtil.format("[username, password, firstaname, lastname, email]: [{0}, {1}, {2}, {3}, {4}]"
            , this.username, this.password, this.firstname, this.lastname, this.email);
    };
};
