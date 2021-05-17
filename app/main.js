import Alligator from "./models/Alligator.js";
import Baboon from "./models/Baboon.js";
import Condor from "./models/Condor.js";
import Donkey from "./models/Donkey.js";
import Eagle from "./models/Eagle.js";


// let zoo = []
let birds =[]

let ally = new Alligator("Ally", "Green", "F", 200, 60, "big")

let bob = new Baboon("Bob", "Blue", "M", 20, 15, "small")

let cal = new Condor("Cal", "Black", "M", 15, '6ft', "medium")
birds.push(cal)

let darrel = new Donkey("Darrel", "Spotted", "M", 400, '15 hands', 3)

let earl = new Eagle("Earl", "Gold", "M", 25, "5ft", "medium")
birds.push(earl)

let abe = new Alligator()



console.log(ally)
console.log(bob)
console.log(cal)
console.log(darrel)
console.log(abe)
console.log(birds)
