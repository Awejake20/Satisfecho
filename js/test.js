import Vector from "../Models/Vector.js"

let vec1 = new Vector(0,1,2);
let vec2 = new Vector(3,4,5,6);
let vec3 = vec1.add(vec2);

console.log(vec3.toString())