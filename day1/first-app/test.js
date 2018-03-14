var Developer = require('./developer.js');
var Admin = require('./admin.js');

var employeeArr = [
    new Developer("Shivanad","Buddarthi",1000,500,0,1000),
    new Developer("Shabana","Parvin",1200,600,0,200),
    new Admin("Abcd","Xyz",1000,500,500,500),
    new Developer("Srinivasa","Katta",2000,100,0,5000),
    new Admin("EFGH","Xyz",1000,500,500,500)
];

for(var i in employeeArr){
    console.log(employeeArr[i].getInfo());
}