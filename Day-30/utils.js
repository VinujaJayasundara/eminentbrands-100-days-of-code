"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMessage = logMessage;
function logMessage(message, config) {
    var time = config.timestamp ? "[".concat(new Date().toLocaleTimeString(), "] ") : "";
    console.log("".concat(time).concat(config.prefix, ": ").concat(message));
}
