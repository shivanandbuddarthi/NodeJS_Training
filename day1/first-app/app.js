//console.log(global);


function Person(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
    this.getFullName=function(){
        return this.firstName + "," + this.lastName; 
    }    
}

var virat = new Person("Virat","Kohli");
console.log(virat.getFullName());
//console.log(global.getFullName());
//console.log(Person.prototype);
//console.log(virat.__proto__);


var sachin = new Person("Sachin","Tendulkar");
console.log(sachin.getFullName());


Person.prototype.age=28;
Person.prototype.represents = ["India","TeamXI"]


console.log(virat.age);
console.log(sachin.age);

sachin.age++;

console.log(virat.age);
console.log(sachin.age);



console.log(sachin.represents);
console.log(virat.represents);

sachin.represents = ["India","TeamXI"];
sachin.represents.push("Mumain Indians");
virat.represents.push("Royal Chalelngers Bangalore");


console.log(sachin.represents);
console.log(virat.represents);

