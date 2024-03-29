const Recipe = require('./Recipe');
const { v4: uuidv4 } = require('uuid');


class Item {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
        this.recipes = [];
    }

    addRecipe(recipe) {
        if (recipe instanceof Recipe) {
            this.recipes.push(recipe);
        } else {
            throw new Error("Recipe must be an instance of class Recipe");
        }
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            recipes: this.recipes.map(recipe => recipe.id)
        }
    }
}

module.exports = Item