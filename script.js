// Coin counts - you can change these values for testing
let pennies = 200;
let nickels = 200;
let dimes = 200;
let quarters = 200;

// Coin values in dollars
let pennyValue = 0.01;
let nickelValue = 0.05;
let dimeValue = 0.10;
let quarterValue = 0.25;

// Calculate total value for each type
let totalPennies = pennies * pennyValue;
let totalNickels = nickels * nickelValue;
let totalDimes = dimes * dimeValue;
let totalQuarters = quarters * quarterValue;

// Total combined value
let totalValue = totalPennies + totalNickels + totalDimes + totalQuarters;

// Wrapper capacities
let pennyWrapperCapacity = 50;
let nickelWrapperCapacity = 40;
let dimeWrapperCapacity = 50;
let quarterWrapperCapacity = 40;

// Calculate wrappers and remainders
let pennyWrappers = Math.floor(pennies / pennyWrapperCapacity);
let pennyRemainder = pennies % pennyWrapperCapacity;

let nickelWrappers = Math.floor(nickels / nickelWrapperCapacity);
let nickelRemainder = nickels % nickelWrapperCapacity;

let dimeWrappers = Math.floor(dimes / dimeWrapperCapacity);
let dimeRemainder = dimes % dimeWrapperCapacity;

let quarterWrappers = Math.floor(quarters / quarterWrapperCapacity);
let quarterRemainder = quarters % quarterWrapperCapacity;

// Log results to the console
console.log(`Pennies: ${pennyWrappers} wrapper(s), ${pennyRemainder} remaining`);
console.log(`Nickels: ${nickelWrappers} wrapper(s), ${nickelRemainder} remaining`);
console.log(`Dimes: ${dimeWrappers} wrapper(s), ${dimeRemainder} remaining`);
console.log(`Quarters: ${quarterWrappers} wrapper(s), ${quarterRemainder} remaining`);
console.log(`Total Value: $${totalValue.toFixed(2)}`);

// Generate output for the webpage
let output = `
    <h2>Coin Wrapper Report</h2>
    <p>Pennies: ${pennyWrappers} wrapper(s), ${pennyRemainder} remaining</p>
    <p>Nickels: ${nickelWrappers} wrapper(s), ${nickelRemainder} remaining</p>
    <p>Dimes: ${dimeWrappers} wrapper(s), ${dimeRemainder} remaining</p>
    <p>Quarters: ${quarterWrappers} wrapper(s), ${quarterRemainder} remaining</p>
    <h3>Total Value: $${totalValue.toFixed(2)}</h3>
`;

// Display the output in the #output div
document.getElementById('output').innerHTML = output;