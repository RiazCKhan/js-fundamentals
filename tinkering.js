var flavour = "vanilla"
var vessel = "cone"
var toppings = "sprinkles"

if ((flavour === "vanilla" || "chocolate") && (vessel === "cone" || "bowl") && (toppings === "sprinkles" || "peanuts")) {
  console.log("I'd like two scoops of " + flavour + " ice cream in a " + vessel + " with " + toppings);
} else {
  console.log("No thank you I/'m on a diet");
}
