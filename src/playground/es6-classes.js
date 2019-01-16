// Setup constructor to take name and age (default to 0)
// getDescription - Nishant Singh is 22 year old

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Traveler extends Person {
    constructor(name, age, location = 'Anonymous') {
        super(name, age);
        this.location = location;
    }
    
    getGretting() {
        let travel = super.getGretting();
        if(this.location) {
            travel += ` I'm visiting from ${this.location}.`;
        }
        return travel;
    }
}

const me = new Traveler('Nishant Singh', 22, 'Delhi');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());