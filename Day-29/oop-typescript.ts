// Day 29: Object-Oriented Programming (OOP) in TS

class BankAccount {
    public owner: string;
    protected balance: number; // Only this class and children can see this
    private readonly accountNumber: number; // Totally hidden and unchangeable

    constructor(owner: string, initialBalance: number, accNum: number) {
        this.owner = owner;
        this.balance = initialBalance;
        this.accountNumber = accNum;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`${this.owner} deposited $${amount}. New Balance: $${this.balance}`);
    }

    // A getter to safely reveal the private balance
    public getBalance(): string {
        return `Current Balance: $${this.balance}`;
    }
}

// Inheritance: Creating a specific type of account
class SavingsAccount extends BankAccount {
    private interestRate: number = 0.05;

    public addInterest(): void {
        // We can access 'balance' because it is 'protected', not 'private'
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Interest added! New Balance: $${this.balance}`);
    }
}


const mySavings = new SavingsAccount("Vinuja", 1000, 987654321);
mySavings.deposit(500);
mySavings.addInterest();
console.log(mySavings.getBalance());

