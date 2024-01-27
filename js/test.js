import Vector from "../Models/Vector.js"
import Matrix from "../Models/Matrix.js"

let m1 = new Matrix(new Vector(1,2,3), new Vector(4,5,6), new Vector(7,8,9));

console.log(m1[1][1])