// Day 28: Functions, Generics and Utility Types
// 1. A Generic Function: Works with any type of array
// <T> is the placeholder for the Type
function getFirstElement(array) {
    return array[0];
}
var numResult = getFirstElement([10, 20, 30]); // T becomes number
var strResult = getFirstElement(["React", "TS", "Node"]); // T becomes string
// Partial<T> makes all properties optional
function updateProduct(id, fieldsToUpdate) {
    console.log("Updating product ".concat(id, " with:"), fieldsToUpdate);
}
var preview = {
    name: "MacBook Pro",
    price: 2499
};
console.log("Generic Result:", numResult, strResult);
updateProduct(101, { price: 2199 }); // Only updating the price
