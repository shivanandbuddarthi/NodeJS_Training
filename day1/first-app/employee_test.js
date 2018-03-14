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
Employee.prototype.calcuateSalary = function(){
    try{
        return parseInt(this.basic)+parseInt(this.hra)+parseInt(this.da);
    }catch(e){
        console.log("Error while calculating the salary " + e);
        return 0;
    }
}

function Developer(fname,lanme,basic,hra,da,incentive){
    Employee.call(this,fname,lanme,basic,hra,da);

    this.calcuateSalary = function(){
        return Employee.prototype.calcuateSalary.apply(this) + parseInt(incentive);
    }

    this.getFullName = function(){
       return Employee.prototype.getFullName.apply(this);
    }

    this.getInfo = function(){
        return `
        Hey, this is ${this.getFullName()}. I am a Developer, having total salary of ${this.calcuateSalary()}
        `
    }

}


function Admin(fname,lanme,basic,hra,da,gratuity){
    Employee.call(this,fname,lanme,basic,hra,da);

    this.calcuateSalary = function(){
        return Employee.prototype.calcuateSalary.apply(this) + parseInt(gratuity);
    }

    this.getFullName = function(){
       return Employee.prototype.getFullName.apply(this);
    }

    this.getInfo = function(){
        return `
        Hey, this is ${this.getFullName()}. I am an Admin, having total salary of ${this.calcuateSalary()}
        `
    }

}



var employeeArr = [
    new Developer("Shivanad","Buddarthi",1000,500,0,100),
    new Developer("Shabana","Parvin",1200,600,0,200),
    new Admin("Abcd","Xyz",1000,500,500,500),
    new Developer("Srinivasa","Katta",2000,100,0,500),
    new Admin("EFGH","Xyz",1000,500,500,500)
];

for(i in employeeArr){
    console.log(employeeArr[i].getInfo());
}