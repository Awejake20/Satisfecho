import Matrix from "./Matrix.js"

/**
 * Vector class, inherits from Array
 * @constructor
 * @param {number} args - Vector elements
 */

class Vector extends Array {

  constructor(...args) {

    if (args.some(arg => typeof arg !== 'number')) {
      throw new Error('All arguments must be numbers.');
    }
    
    super(...args);
  }

  toString() {
    /**
     * @return {string} The string representation of the vector.
     */

    let str = "[";
    for (const i of this) {
      str += i + ",";
    }
    str = str.slice(0,-1);
    str += "]";
    return str;
  }

  add(vector) {
    /**
     * Addition of two vectors.
     * @param {Vector} vector - Vector to add to this.
     * @returns {Vector} The result of this + vector.
     */

    if (!(vector instanceof Vector)) {
      throw new Error("Argument must be a Vector.")
    }
    else if (vector.length != this.length) {
      throw new Error("Vectors must be the same length.")
    }

    let vec = new Vector();
    for (let i = 0; i < this.length; i++) {
      vec[i] = this[i] + vector[i];
    }

    return vec;
  }

  subtract(vector) {
    /**
     * Subtraction of two vectors.
     * @param {Vector} vector - Vector to subtract from this.
     * @returns {Vector} The result of this - vector.
     */

    if (!(vector instanceof Vector)) {
      throw new Error("Argument must be a Vector.")
    }
    else if (vector.length != this.length) {
      throw new Error("Vectors must be the same length.")
    }

    let vec = new Vector();
    for (let i = 0; i < this.length; i++) {
      vec[i] = this[i] - vector[i];
    }

    return vec;
  }

  multiply(x) {
    /**
     * Multiplication by a scalar or vector.
     * Vector multiplication defined as the dot product of x * this.
     */

    if (!(x instanceof Number) && 
        !(x instanceof Vector) && 
        !(x instanceof Matrix)) {
      throw new Error("Argument must be a Number, Vector, or Matrix.")
    }
    else if ((x instanceof Vector) && (this.length != x.length)) {
      throw new Error("Vectors must be the same length.")
    }

    // Scalar multiplication
    if (x instanceof Number) {

      let vec = new Vector();
      for (let i = 0; i < this.length; i++) {
        Vector[i] = x*this[i];
      }

      return vec;
    }

    // Vector dot product
    else if (x instanceof Vector) {

      let sum = 0;
      for (let i = 0; i < this.length; i++) sum += this[i] * x[i];
      
      return sum;
    }
  }


}

export default Vector
