const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
debugger;  

  let total = 0;
  // Fixed: Use < instead of <= to avoid accessing an undefined array element
  for (let i = 0; i < cartItems.length; i++) { 
      total += cartItems[i].price; 
  }
  return total;
}

function applyDiscount(total, discountRate) {
  debugger;

  // Fixed: Validate the discount rate.
  if (typeof discountRate !== "number" || discountRate < 0 || discountRate > 1) {
    throw new Error("Discount rate must be between 0 and 1.");
  }
  
  return total - total * discountRate; 
}
  

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  debugger;

  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });

  // Fixed: Ensure total is a valid number.
  if (typeof total !== "number" || isNaN(total)) {
    total = 0;
  }
  receipt += `Total: $${total.toFixed(2)}`; 
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;



/*
==========================================
Debugging Summary
==========================================

Errors Found and Fixes:

1. Error: Incorrect loop condition in calculateTotal()
   - The for loop used "<=" instead of "<".
   - This caused the loop to run one extra time, making
     cartItems[i] undefined on the last iteration.
   - Fix: Changed the condition to "i < cartItems.length".

2. Error: Missing validation in applyDiscount()
   - The function accepted any discount value, including invalid values.
   - Fix: Added validation to ensure the discount rate is between 0 and 1.

3. Error: generateReceipt() assumed total was always a number.
   - Calling toFixed() on an invalid value would cause a runtime error.
   - Fix: Added a check to ensure total is a valid number before formatting it.

Debugging Tools Used:

- Console:
  Used the Console to identify the runtime error and view the error message.

- Sources Tab:
  Set breakpoints in calculateTotal(), applyDiscount(), and generateReceipt()
  to pause execution and inspect the program.

- Call Stack:
  Used the Call Stack to trace where the error originated and determine which
  function caused the problem.

- debugger Statement:
  Added a debugger statement to pause execution inside the loop and inspect
  the values of i, cartItems[i], and total during each iteration.




*/
