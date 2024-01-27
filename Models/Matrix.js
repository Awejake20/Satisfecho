import Vector from "./Vector.js";

/**
 * Matrix class.
 * @constructor
 * @param
 */

class Matrix extends Array {
  
  constructor(...args) {

    if (args.some(arg => !(arg instanceof Vector) || 
        arg.length !== args.length)) {
      throw new Error('All arguments must be Vectors of the correct length.');
    }

    super(...args);
  }

  toString() {
    /**
     * @return {string} The string representation of the matrix.
     */

    let str = "\n"
    for (let i = 0; i < this.length; i++) {
      str += this[i].toString() + "\n";
    }

    return str;
  }

  add(matrix) {
    /**
     * Addition of two matrices.
     * @param {Matrix} matrix - Matrix to add to this.
     * @returns {Matrix} The result of this + matrix.
     */

    if (!(matrix instanceof Matrix)) {
      throw new Error("Argument must be a Matrix.")
    }
    else if (matrix.length != this.length) {
      throw new Error("Matrices must be the same size.")
    }

    let mat = new Matrix();
    for (let i = 0; i < this.length; i++) {
      mat[i] = this[i] + matrix[i];
    }

    return mat;
  }

  subtract(matrix) {
    /**
     * Subtraction of two matrices.
     * @param {Matrix} matrix - Matrix to subtract from this.
     * @returns {Matrix} The result of this - matrix.
     */

    if (!(matrix instanceof Matrix)) {
      throw new Error("Argument must be a Matrix.");
    }
    else if (matrix.length != this.length) {
      throw new Error("Matrices must be the same size.");
    }

    let mat = new Matrix();
    for (let i = 0; i < this.length; i++) {
      mat[i] = this[i] - matrix[i];
    }

    return mat;
  }

  multiply(x) {
    /**
     * Matrix multiplication by a scalar, vector, or matrix. Vector and matrix
     * multiplication is defined as this * x.
     */

    if (!(x instanceof Number) &&
        !(x instanceof Vector) &&
        !(x instanceof Matrix)) {
      throw new Error("Argument must be a Number, Vector, or Matrix");
    }
    else if ((x instanceof Vector) && (x.length != this.length)) {
      throw new Error("Vector argument must be the same length as the matrix")
    }
    else if ((x instanceof Matrix) && (x.length != this.length)) {
      throw new Error("Matrix argument must be the same length as the matrix")
    }

    let mat = new Matrix();
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        mat[i][j] = this[i]
      }
    }
  }
}

export default Matrix