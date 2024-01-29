import Vector from "./Vector.js";

/**
 * Matrix class.
 * @constructor
 * @param
 */

class Matrix extends Array {
  
  constructor(...args) {

    if (args.some(arg => !(arg instanceof Vector) || 
        arg.length != args.length)) {
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

  transpose() {
    /**
     * @return {Matrix} The transpose of this matrix.
     */

    let mat = new Matrix();
    for (let i = 0; i < this.length; i++) {
      mat[i] = new Vector();
      for (let j = 0; j < this.length; j++) {
        mat[i][j] = this[j][i];
      }
    }

    return mat;
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
      mat[i] = new Vector();
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
      mat[i] = new Vector();
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
      throw new Error("Matrix argument must be the same size as the matrix")
    }

    // Scalar multiplication
    if (x instanceof Number) {

      let mat = new Matrix();
      for (let i = 0; i < this.length; i++) {
        mat[i] = new Vector();
        for (let j = 0; j < this.length; j++) {
          mat[i][j] = x * this[i][j]
        }
      }

      return mat;
    }

    // Vector multiplication
    else if (x instanceof Vector) {
      
      let vec = new Vector();
      for (let i = 0; i < this.length; i++) {
        vec[i] = x.multiply(this[i]);
      }

      return vec;
    }

    // Matrix multiplication
    else if (x instanceof Matrix) {

      let mat = new Matrix();
      x = x.transpose();
      for (let i = 0; i < this.length; i++) {
        mat[i] = new Vector();
        for (let j = 0; j < this.length; j++) {
          mat[i][j] = this[i].multiply(x[j]);
        }
      }

      return mat;
    }
  }

  invert() {
    /**
     * @return {Matrix} The inverse of this matrix.
     */
  
    // Create identity matrix
    let identity = new Matrix();
    for (let i = 0; i < this.length; i++) {
      identity[i] = new Vector();
      for (let j = 0; j < this.length; j++) {
        identity[i][j] = (i == j ? 1 : 0);
      }
    }
  
    // Create a copy of this matrix
    let mat = new Matrix();
    for (let i = 0; i < this.length; i++) {
      mat[i] = new Vector();
      for (let j = 0; j < this.length; j++) {
        mat[i][j] = this[i][j];
      }
    }
  
    for (let i = 0; i < this.length; i++) {
      // Find row with largest absolute value
      let max = i;
      for (let j = i + 1; j < this.length; j++) {
        if (Math.abs(mat[j][i]) > Math.abs(mat[max][i])) {
          max = j;
        }
      }
  
      // Pivot current row with largest absolute value row
      [mat[i], mat[max]] = [mat[max], mat[i]];
      [identity[i], identity[max]] = [identity[max], identity[i]];
  
      // Scale pivot row
      const scale = mat[i][i];
      for (let j = 0; j < this.length; j++) {
        mat[i][j] /= scale;
        identity[i][j] /= scale;
      }
  
      // Eliminate other rows
      for (let j = 0; j < this.length; j++) {
        if (j != i) {
          const factor = mat[j][i];
          for (let k = 0; k < this.length; k++) {
            mat[j][k] -= factor * mat[i][k];
            identity[j][k] -= factor * identity[i][k];
          }
        }
      }
    }
  
    return identity;
  }
}

export default Matrix
