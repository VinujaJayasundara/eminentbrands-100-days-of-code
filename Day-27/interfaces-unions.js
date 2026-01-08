// Day 27: Advanced Type Definitions
function printId(id) {
    // 3. Type Narrowing: Checking the type at runtime
    if (typeof id === "string") {
        console.log("ID is a string: ".concat(id.toUpperCase()));
    }
    else {
        console.log("ID is a number: ".concat(id.toFixed(0)));
    }
}
// 4. Using the Interface
var newUser = {
    id: 1,
    username: "Vinuja_Dev",
    email: "vinuja@example.com",
    membership: "Gold"
};
console.log("User: ".concat(newUser.username, ", Tier: ").concat(newUser.membership));
printId("u-123");
printId(456);
