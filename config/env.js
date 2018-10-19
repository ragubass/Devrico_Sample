//Template for individual env.js files
//Do not commit env.js or local.js to repository as this will override all env.js and local.js for everyone

var webServerDefaultPort = '';
module.exports = {

    seleniumAddress: (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),

    baseUrl: 'http://qa-servion4.clickfox.net'

};