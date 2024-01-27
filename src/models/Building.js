const { v4: uuidv4 } = require('uuid');

class Building {
    constructor(name, dimensions, category, subCategory, powerConsumption, inputsCount, outputsCount, requiredResearch) {
        this.id = uuidv4();
        this.name = name;
        this.dimensions = dimensions;
        this.category = category;
        this.subCategory = subCategory;
        this.powerConsumption = powerConsumption;
        this.inputsCount = inputsCount;
        this.outputsCount = outputsCount;
        
        this.requiredResearch = requiredResearch;

        this.isUnlocked = false;
    }

    unlock() {
        this.isUnlocked = true;
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            dimensions: this.dimensions.id,
            category: this.category,
            subCategory: this.subCategory,
            powerConsumption: this.powerConsumption,
            inputsCount: this.inputsCount,
            outputsCount: this.outputsCount,
            requiredResearch: this.requiredResearch.id
        }
    }
}

module.exports = Building