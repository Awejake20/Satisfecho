import { Recipe } from "./Recipe.js";

class ItemRecipe extends Recipe {
    constructor(name, ingredients, item, craftingMachine, craftingTime, yield) {
        super(name, ingredients);
        this.item = item;
        this.craftingMachine = craftingMachine;
        this.craftingTime = craftingTime;
        this.yield = yield;
        
        // Check if this is the default recipe for the item
        this.isDefault = this.name === this.item.name;
        
        if (this.isDefault) {
            this.unlock();
        }
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            ingredients: this.ingredients.map(ingredient => ingredient.id),
            item: this.item.id,
            craftingMachine: this.craftingMachine.id,
            craftingTime: this.craftingTime,
            yield: this.yield
        }
    }
}

export default ItemRecipe;