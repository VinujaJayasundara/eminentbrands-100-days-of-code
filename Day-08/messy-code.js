// Day 8 Challenge: Final Clean Code Solution

const MILLISECONDS_IN_DAY = 86400000;
const DISCOUNT_THRESHOLD = 1000;
const DISCOUNT_RATE = 0.15; 
const OVERDUE_DAYS_LIMIT = 30;



// Single Responsibility 1: Calculates the subtotal amount.
function calculateSubtotal(orderItems) {
    return orderItems.reduce((total, item) => total + item.amount, 0); 
}

//  Responsibility 2: Applies discount logic, returns the final amount.
function applyVolumeDiscount(subtotal) {
    if (subtotal > DISCOUNT_THRESHOLD) {
        const finalMultiplier = 1 - DISCOUNT_RATE;
        const discountedTotal = subtotal * finalMultiplier;
        return discountedTotal;
    }
    return subtotal;
}

// Responsibility 3: Checks date logic and logs warnings.
function checkAndLogOverdue(orderItems) {
    const orderDate = new Date(orderItems[0].date); 
    const daysOverdueThreshold = MILLISECONDS_IN_DAY * OVERDUE_DAYS_LIMIT;

    if (new Date() - orderDate > daysOverdueThreshold) {
        console.warn("WARNING: This order is overdue based on the 30-day limit.");
        return true;
    }
    return false;
}




const orders = [
    { amount: 500, date: '2025-11-01' },
    { amount: 600, date: '2025-12-05' } 
];

// 1. Calculate the base total
const subtotal = calculateSubtotal(orders);

// 2. Check for overdue status (Logging happens inside the function)
checkAndLogOverdue(orders);

// 3. Apply the final discount
const finalAmount = applyVolumeDiscount(subtotal);

if (subtotal > DISCOUNT_THRESHOLD) {
    console.log("Notification: A volume discount was applied to this big order."); 
    console.log("Discount Applied: 15%");
}

console.log("Order Summary ");
console.log("Subtotal:", subtotal.toFixed(2));
console.log("Final Amount:", finalAmount.toFixed(2));
