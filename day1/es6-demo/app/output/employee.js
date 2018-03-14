(function() {
    "use strict";
    class source$employee$$Employee{
        constructor(fname, lname, basic, hra, da) {
            this.fname = fname;
            this.lname = lname;
            this.basic = basic;
            this.hra = hra;
            this.da = da;
        }
    
        calculateSalary() {
            return this.basic + this.hra + this.da;
        }
    }
}).call(this);

//# sourceMappingURL=employee.js.map