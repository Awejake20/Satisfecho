import { v4 as uuidv4 } from 'uuid';

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

export default ResearchTier;