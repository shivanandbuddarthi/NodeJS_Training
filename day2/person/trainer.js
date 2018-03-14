let Person = require('./person');

class Trainer extends Person{
    constructor(name,id,subject){
        super(name,id);
        this.subject = subject;
    }

    print(){
        return `
        ${super.print()} I teach ${this.subject}
        `
    }
}

module.exports = Trainer;