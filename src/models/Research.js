const { v4: uuidv4 } = require('uuid');

class Research {
    constructor(name, tier) {
        this.id = uuidv4();
        this.name = name;
        this.tier = tier;
        this.isCompleted = false;
    }

    complete() {
        this.isCompleted = true;
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            tier: this.tier.id,
        }
    }
}

module.exports = Research