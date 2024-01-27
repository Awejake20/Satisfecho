/**
 * Vector class, inherits from Array
 * @constructor
 * @param {number} args - Vector elements
 */

class Vector extends Array {

    constructor(...args) {
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
        str = str.slice(0, -1);
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
        } else if (vector.length != this.length) {
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
        } else if (vector.length != this.length) {
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
         * Multiplication by a scalar, vector, or matrix. Vector and matrix 
         * multiplication are defined as x*this.
         */


    }


}