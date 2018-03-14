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


module.exports=Employee;