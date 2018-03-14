/* Admin */
var Employee = require('./employee.js');

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

module.exports = Admin;