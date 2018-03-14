let Trainer = require('./trainer');

let shivanand = new Trainer("Shivanand", 1, "Node JS");

console.log(shivanand.print());



// callback test
console.log("*************** callback test ************");
const callbackModule = require('./callback');

const succss = user => console.log(user);
const failure = errorMsg => console.log(errorMsg);

callbackModule.getUser(1, succss, failure);
callbackModule.getUser(5, succss, failure);