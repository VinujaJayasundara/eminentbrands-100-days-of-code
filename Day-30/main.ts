// Importing from our module
import { logMessage, LoggerConfig } from './utils';

const myConfig: LoggerConfig = {
    prefix: "APP_LOG",
    timestamp: true
};

logMessage("System initialized successfully!", myConfig);

// CONCEPT: Namespaces (Grouping related logic)
namespace Validation {
    export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    export function isValidEmail(email: string): boolean {
        return emailRegex.test(email);
    }
}

console.log("Is valid email?", Validation.isValidEmail("test@dev.com"));