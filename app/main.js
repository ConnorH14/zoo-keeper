import Alligator from "./models/Alligator.js";
import Baboon from "./models/Baboon.js";
import Condor from "./models/Condor.js";

let zoo = []

let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
zoo.push(ally)

let bob = new Baboon("Bob", "Blue", "M", 20, 15, "small");
zoo.push(bob)

let cal = new Condor("Cal", "Black", "M", 15, '6ft', "medium");
zoo.push(cal)

console.log(ally)
console.log(bob)
console.log(cal)
console.log(zoo)
