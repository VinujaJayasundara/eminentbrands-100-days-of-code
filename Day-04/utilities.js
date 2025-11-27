//day 4 Utilities map, filter, reduce examples
// Example 1: Using map to extract product names
const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "T-Shirt", price: 25, category: "Apparel" },
    { id: 3, name: "Mouse", price: 50, category: "Electronics" },
    { id: 4, name: "T-Shirt", price: 30, category: "Apparel" }
];

// filter= filter out all apparel items (using. filter())
function filterOutApparel(items) {
    return items.filter(item => item.category !== "Apparel");
}
//reduce used to calculate total value of all items (using. reduce())
function calculateTotalValue(items) {
    return items.reduce((accumulator, item) => accumulator + item.price, 0);
}

//map used to get a list of unique product names (using. map() and Set)

function getUniqueNames(items) {
    const names = items.map(item => item.name);
    return [...new Set(names)]; // Uses Set to filter out duplicates
}

//  EXECUTION 
const nonApparel = filterOutApparel(products);
console.log("Filtered Items:", nonApparel);// Output: [ {id: 1, ...}, {id: 3, ...} ]


const totalValue = calculateTotalValue(nonApparel);
console.log("Total Value of Filtered Items (Reduce):", totalValue);// Output: 1250 (1200 + 50)


const uniqueNames = getUniqueNames(products);
console.log("Unique Product Names:", uniqueNames);// Output: [ "Laptop", "T-Shirt", "Mouse" ]
//