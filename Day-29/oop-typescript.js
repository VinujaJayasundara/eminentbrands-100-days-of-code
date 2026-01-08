// Day 29: Object-Oriented Programming (OOP) in TS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(owner, initialBalance, accNum) {
        this.owner = owner;
        this.balance = initialBalance;
        this.accountNumber = accNum;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("".concat(this.owner, " deposited $").concat(amount, ". New Balance: $").concat(this.balance));
    };
    // A getter to safely reveal the private balance
    BankAccount.prototype.getBalance = function () {
        return "Current Balance: $".concat(this.balance);
    };
    return BankAccount;
}());
// Inheritance: Creating a specific type of account
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interestRate = 0.05;
        return _this;
    }
    SavingsAccount.prototype.addInterest = function () {
        // We can access 'balance' because it is 'protected', not 'private'
        var interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log("Interest added! New Balance: $".concat(this.balance));
    };
    return SavingsAccount;
}(BankAccount));
var mySavings = new SavingsAccount("Vinuja", 1000, 987654321);
mySavings.deposit(500);
mySavings.addInterest();
console.log(mySavings.getBalance());
