const { v4: uuidv4 } = require('uuid');

/**
 * Represents the dimensions of an object.
 * @constructor
 * @param {number} width - The width of the object.
 * @param {number} height - The height of the object.
 * @param {number} length - The length of the object.
 */
class Dimensions {
    constructor(width, height, length) {
        this.id = uuidv4();
        this.width = width;
        this.height = height;
        this.length = length;
    }

    /**
     * Convert the dimensions to a JSON object.
     * @return {Object} The JSON representation of the dimensions.
     */
    toJson() {
        return {
            id: this.id,
            width: this.width,
            height: this.height,
            length: this.length
        }
    }

    /**
     * Convert the dimensions to a string.
     * @return {string} The string representation of the dimensions.
     */
    toString() {
        return `Dimensions(length=${this.length}, width=${this.width}, height=${this.height})`;
    }
}

module.exports = Dimensions