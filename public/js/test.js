import Vector from "../../src/models/Vector.js"
import Matrix from "../../src/models/Matrix.js"

let m1 = new Matrix(new Vector(2,3,4), new Vector(-3,-3,2), new Vector(-2,1,-1));
console.log(m1.invert().toString());
