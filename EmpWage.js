console.log("Welcome To The Employee Wage Computation");
//UC7-Computing The Monthly Employee Wage By Usimg Array
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
function calDailyWage(empHrs){
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
}
let empWage = calDailyWage(totalEmpHrs);
console.log("Total Days " + totalWorkingDays + " Hours " + totalEmpHrs +  " Emp Wage "+ empWage);

let totalEmpWage=0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
//UC-7A--Using For Each Loop For Emp Wage
empDailyWageArr.forEach(sum);
console.log("Total Days : " + totalWorkingDays + "Total Hours "  + totalEmpHrs + "Emp Wage " + totalEmpWage);
//Reduce Function
function totalEmpWages(totalWage , dailyWage) {
    return totalWage + dailyWage;
}
console.log("Emp Wage With Reduce : " + empDailyWageArr.reduce(totalEmpWages,0));

//UC-7B-Show The Day Along With Daily Wage Using Array Map Function
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + "=" +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage With Map");
console.log(mapDayWithWageArr);
//UC-7C-Show Days When Full Time Earned 
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Daily Wage Filter When FullTime Earned");
console.log(fullDayWageArr);
//UC-7D-Find The First Occurance When Full Time Was Earned
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First Time Full Time Wage Was Earned " + mapDayWithWageArr.find(findFullTimeWage));

//UC-7E-Check If Every Element Of Full Time Wage Is Truely Holding Full Time Wage 
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("Check All Elements Have Full Time Wage " +fullDayWageArr.every(isAllFullTimeWage));
//UC-7F-Check If There Is Any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");

}
console.log("ANY PartvTiem Wage " +mapDayWithWageArr.some(isAnyPartTimeWage));
//UC-7G-Find The Num Of Days Employee Worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0)
        return numOfDays+1;
    return numOfDays;    
}
console.log("Num Of Days Worked " +empDailyWageArr.reduce(totalDaysWorked , 0)); 
}