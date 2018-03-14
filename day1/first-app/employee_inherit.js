/* Employee */
function Employee(fname,lanme,basic,hra,da){
    this.fname = fname;
    this.lanme = lanme;
    this.basic = basic;
    this.hra = hra;
    this.da = da;
}
Employee.prototype.getFullName = function(){
    return this.fname + "," + this.lanme;
}
Employee.prototype.calcuateBasicSalary = function(){
    try{
        return parseInt(this.basic)+parseInt(this.hra)+parseInt(this.da);
    }catch(e){
        console.log("Error while calculating the salary " + e);
        return 0;
    }
}
Employee.prototype.getInfo = function(){
    return `
    Hey, this is ${this.getFullName()}. I am a ${this.role}, having total salary of ${this.calcuateSalary()}
    ` 
}

/* Developer */
function Developer(fname,lanme,basic,hra,da,incentive){
    Employee.call(this,fname,lanme,basic,hra,da);
    this.incentive = incentive;
}
Developer.prototype = new Employee();
//Developer.prototype = Employee.prototype;
Developer.prototype.role="Developer";
Developer.prototype.calcuateSalary = function(){
    return this.calcuateBasicSalary() + parseInt(this.incentive);
}


/* Admin */
function Admin(fname,lanme,basic,hra,da,gratuity){
    Employee.call(this,fname,lanme,basic,hra,da);
    this.gratuity = gratuity;
}
Admin.prototype = new Employee();
//Admin.prototype = Employee.prototype;
Admin.prototype.role="Admin";
Admin.prototype.calcuateSalary = function(){
    return this.calcuateBasicSalary() + parseInt(this.gratuity);
}






var employeeArr = [
    new Developer("Shivanad","Buddarthi",1000,500,0,100),
    new Developer("Shabana","Parvin",1200,600,0,200),
    new Admin("Abcd","Xyz",1000,500,500,500),
    new Developer("Srinivasa","Katta",2000,100,0,500),
    new Admin("EFGH","Xyz",1000,500,500,500)
];

for(var i in employeeArr){
    console.log(employeeArr[i].getInfo());
}




function doSomething(a,b){
    return a+b;
}

function a(a, b, c){
    console.log("second...");
    return a+b+c;
}

function a (a, b){
    console.log("first...");
    return a+b;
}


console.log(a(10,20));