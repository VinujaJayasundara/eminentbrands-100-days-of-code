"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing from our module
var utils_1 = require("./utils");
var myConfig = {
    prefix: "APP_LOG",
    timestamp: true
};
(0, utils_1.logMessage)("System initialized successfully!", myConfig);
// CONCEPT: Namespaces (Grouping related logic)
var Validation;
(function (Validation) {
    Validation.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function isValidEmail(email) {
        return Validation.emailRegex.test(email);
    }
    Validation.isValidEmail = isValidEmail;
})(Validation || (Validation = {}));
console.log("Is valid email?", Validation.isValidEmail("test@dev.com"));
