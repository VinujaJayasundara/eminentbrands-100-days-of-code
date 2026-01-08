// Day 28: Functions, Generics and Utility Types

// 1. A Generic Function: Works with any type of array
// <T> is the placeholder for the Type
function getFirstElement<T>(array: T[]): T {
    return array[0];
}

const numResult = getFirstElement([10, 20, 30]); // T becomes number
const strResult = getFirstElement(["React", "TS", "Node"]); // T becomes string

// 2. Utility Types
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

// Partial<T> makes all properties optional
function updateProduct(id: number, fieldsToUpdate: Partial<Product>) {
    console.log(`Updating product ${id} with:`, fieldsToUpdate);
}

// Pick<T, K> creates a new type by picking specific keys
type ProductPreview = Pick<Product, "name" | "price">;

const preview: ProductPreview = {
    name: "MacBook Pro",
    price: 2499
};

console.log("Generic Result:", numResult, strResult);
updateProduct(101, { price: 2199 }); // Only updating the price