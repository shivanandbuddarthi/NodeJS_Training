/* Developer */
var Employee = require('./employee.js');

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


module.exports = Developer;