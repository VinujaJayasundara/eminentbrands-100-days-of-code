// Day 27: Advanced Type Definitions

// 1. Interface: Defining the shape of a User object
interface User {
    readonly id: number; // Cannot be changed after creation
    username: string;
    email: string;
    membership?: "Gold" | "Silver" | "Bronze"; // Optional property with Union string literal
}

// 2. Union Types: A variable that can be a string OR a number
type ID = string | number;

function printId(id: ID) {
    // 3. Type Narrowing: Checking the type at runtime
    if (typeof id === "string") {
        console.log(`ID is a string: ${id.toUpperCase()}`);
    } else {
        console.log(`ID is a number: ${id.toFixed(0)}`);
    }
}

// 4. Using the Interface
const newUser: User = {
    id: 1,
    username: "Vinuja_Dev",
    email: "vinuja@example.com",
    membership: "Gold"
};

console.log(`User: ${newUser.username}, Tier: ${newUser.membership}`);
printId("u-123");
printId(456);

