const { v4: uuidv4 } = require('uuid');

class ResearchTier {
    constructor(name, milestones) {
        this.id = uuidv4();
        this.name = name;
        this.milestones = milestones; // Array of Research
        this.isCompleted = false;
    }

    complete() {
        this.isCompleted = true;
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            milestones: this.milestones.map(milestone => milestone.id),
        }
    }
}

module.exports = ResearchTier