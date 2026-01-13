/**
 * Day 32: Building a TypeScript Utility Library
 * Focus: Reusability and Type-safe validations.
 */

export class Validator {
    // 1. Email Validation logic
    static isEmail(val: string): boolean {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(val);
    }

    // 2. Password Strength (Min 8 chars, must have a number)
    static isStrongPassword(pass: string): boolean {
        const hasNumber = /\d/;
        return pass.length >= 8 && hasNumber.test(pass);
    }

    // 3. Range Check (e.g., validating age or price)
    static isWithinRange(num: number, min: number, max: number): boolean {
        return num >= min && num <= max;
    }
}

// TESTING THE LIBRARY
const email = "vinuja@eminent.com";
const password = "SafePassword123";

console.log(`Testing Email "${email}":`, Validator.isEmail(email));
console.log(`Testing Password:`, Validator.isStrongPassword(password));
console.log(`Is 25 in range 18-60?`, Validator.isWithinRange(25, 18, 60));