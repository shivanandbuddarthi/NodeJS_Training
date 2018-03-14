//import {} from 'Employee.js';

export class Developer extends Employee{
    constructor(fname,lname,basic,hra,da,incentive){
        super(fname,lname,basic,hra,da);
        this.incentive = incentive;
    }
}