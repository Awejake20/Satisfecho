import { v4 as uuidv4 } from 'uuid';

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

export default Research;