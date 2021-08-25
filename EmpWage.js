console.log("Welcome To The Employee Wage Computation");
{
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    const NUM_OF_WORKING_DAYS=20;
    const MAX_HOURS_IN_MONTH =160;
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let empDailyWageArr = new Array();
    let empDailyWageMap =  new Map();
    let empDailyHrsMap=new Map();
    let empDailyHrsAndDailyWageArr= new Array();


    function calDailyWage(empHrs)  {
        return empHrs * WAGE_PER_HOUR;
    }
    function getWorkingHours(empCheck){

        switch(empCheck){

        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;    
        }
    }
    let empHrs=0;
    while(totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calDailyWage(empHrs));
        empDailyHrsMap.set(totalWorkingDays,empHrs);
        empDailyWageMap.set(totalWorkingDays,calDailyWage(empHrs));
    }
    //UC8-Computing The Monthly Employee Wage By Usimg Array And Map
    console.log(empDailyWageMap);
    function totalEmpWages(totalWage , dailyWage) {
    return totalWage + dailyWage;
    }
    console.log("Emp Wage Map TotalHrs : " + Array.from(empDailyHrsMap.values()).reduce(totalEmpWages,0));
    console.log("Emp Wage Map TotalWage : " + Array.from(empDailyWageMap.values()).reduce(totalEmpWages,0));
    const findtotal = (totalVal,dailyVal) =>{
    return totalVal+dailyVal;
    }
    //UC9-Computing The Monthly Employee Wage By Usimg Arrow Functions
    let totalHrs= Array.from(empDailyHrsMap.values()).reduce(findtotal,0);
    let totalSalary = empDailyWageArr.filter(dailyWage=>dailyWage>0).reduce(findtotal,0);
    console.log("Emp Wage with Arrow : Total hours : " + totalHrs + " Total wages: " +totalSalary);

    let nonWorkingDays = new Array();
    let PartWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach((value,key ,map) =>{
        if(value == 8) fullWorkingDays.push(key);
        else if(value == 4) PartWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    console.log("Total Non Working days  : " +nonWorkingDays);
    console.log("Total Full Time Working Days " + fullWorkingDays);
    console.log("Total Part Time Working days " +PartWorkingDays);
}

//UC10-The Daily Wage And Dialy Hours By Using Object Creation
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HOURS_IN_MONTH =160;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyHrsAndDailyWageArr= new Array();
    while(totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyHrsAndDailyWageArr.push(
            {
                dayNum : totalWorkingDays,
                dailyHours:empHrs,
                dailyWage: calDailyWage(empHrs),
                toString(){
                return '\nDay' + this.dayNum + ' => Working Hours Is ' + this.dailyHours + 'And Wage Earned = ' + this.dailyWage
                },
            }); 
    }
console.log("Showing Daily Hours Worked And Wage Earned " +empDailyHrsAndDailyWageArr);
