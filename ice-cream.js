// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...

iceCreamFlavours.splice(5, 0, "root beer");
console.log(iceCreamFlavours);

console.log(iceCreamFlavours[0]); // First flavour of ice cream

console.log(iceCreamFlavours[5]); // Last flavour of ice cream

console.log(iceCreamFlavours.length);
