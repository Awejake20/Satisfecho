const { v4: uuidv4 } = require('uuid');


class Ingredient {
    constructor(name, quantity) {
        this.id = uuidv4();
        this.name = name;
        this.quantity = quantity;
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            quantity: this.quantity
        }
    }
}

module.exports = Ingredient