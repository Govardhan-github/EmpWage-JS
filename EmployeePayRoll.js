class EmployeePayrollData{
    //Constructor
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get name(){return this._name;}
    set name(name){this._name = name;}
    toString(){
        const options ={ year : "numeric", month : "long", day : "numeric"};
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);        
        return "id = "+ this.id + ", name = "+ this.name +", salary = "+this.salary +", gender = "+ this.gender +", startDate = "+ empDate;
                    }
}
let employeePayrollData = new EmployeePayrollData(1, "Govardhan Reddy", 100000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Gopi";
console.log(employeePayrollData.toString());
 let newEmpData = new EmployeePayrollData(2,"Gopi Reddy",1000005,"M",new Date());
 console.log(newEmpData.toString());