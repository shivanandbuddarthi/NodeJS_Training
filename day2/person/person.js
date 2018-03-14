class Person{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    print(){
        return `Hey This is ${this.name}, my Id is ${this.id}.`
    }
}

module.exports = Person;