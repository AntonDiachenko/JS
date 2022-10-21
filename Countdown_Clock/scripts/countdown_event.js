// JavaScript Document

/*  1. start up function ( eventClock() )
    2. showDate - returns the current date in the format mm/dd/yyyy
    3. showTime - returns the current time in the format hh:mm:ss AM/PM
    4. calculateDays - returns the number of days left between the current
    date and target date (January 1st of the next year)
*/

/**
 * create instance of the date object
 */
function eventClock() {
    // create a variable that contains the current date and time
    // var variable_name = new Date("month day, year hours:minutes:seconds");
    let today = new Date();

    // display the current date and time on the browser
    document.clockform.txtDateNow.value = showDate(today);
    document.getElementById('txtTimeNow').value = showTime(today);
    
    // make a call (invoke) the calculateDays function
    let days = calculateDays(today);

    // calculate the time left until the new year
    // call the calculateDays
    document.getElementById('txtDaysLeft').value = Math.floor(days);

    // calculate the hours left in the current day
    let hours =  (days - Math.floor(days)) * 24 ;

    // display hours left to the next lowest integer
    document.getElementById('txtHrLeft').value = Math.floor(hours);

    // calculate the minutes left in the current hour
    let minutes = ( hours - Math.floor(hours)) * 60;

    // display minutes rounded to the next lowest integer
    document.getElementById('txtMinLeft').value = Math.floor(minutes);

    // calculate the seconds left in the current hour
    let seconds = ( minutes - Math.floor(minutes)) * 60;

    // display seconds rounded to the next lowest integer
    document.getElementById('txtSecLeft').value = Math.floor(seconds);

}

/**
 * returns the current date in the format mm/dd/yyyy
 * @param {Date} dateObj 
 */
function showDate(dateObj) {
        // declare variables that hold month, day, and yaer values
        let thisDate = dateObj.getDate();
        let thisMonth = dateObj.getMonth() + 1;
        let thisYear = dateObj.getFullYear();
        
        // return date
        return thisMonth + '/' + thisDate + '/' + thisYear;
} // end function showDate

/**
 * returns the current time in the format hh:mm:ss AM/PM
 * @param {Date} dateObj 
 */
function showTime(dateObj) {
    // declare variables that hold hours, minutes, and seconds values
    let thisSecond = dateObj.getSeconds();
    let thisMinute = dateObj.getMinutes();
    let thisHour = dateObj.getHours();

    // change thisHour from 24-hour format to 12-hour format by
    // 1) if thisHour < 12 set variable ampm to 'am',
    // otherwise set it to 'pm'
    let ampm = (thisHour < 12) ? ' am ' : ' pm ';

    // 2) substract 12 from thisHour variable 
    thisHour = (thisHour > 12) ? (thisHour - 12) : thisHour;

    // 3) if thisHour equals zero, change thisHour to 12
    thisHour = (thisHour == 0) ? 12 : thisHour;

    //Add leading zeros to minutes and seconds less than 10
    thisSecond = (thisSecond < 10) ? ('0' + thisSecond) : thisSecond;
    thisMinute = (thisMinute < 10) ? ('0' + thisMinute) : thisMinute;
    // return time 
    return thisHour + ':' + thisMinute + ':' + thisSecond + ampm;
} // end function showTime


/**
 * returns the number of days left between the current date and target date (Jan 1st the next year)
 * 
 * @param {Date} currentDate 
 */
function calculateDays (currentDate) {
    // create a date object for January 1st of the next year
    let nextYear = currentDate.getFullYear() +1;

    // insert a temporary date for January 1st
    let newYear = new Date('January 1, 2030');

    newYear.setFullYear(nextYear);

    // calculate the difference between the current date and January 1st of the next year

    // convert milliseconds to days
    let numberOfDays = (newYear - currentDate) / (1000 * 60 * 60 * 24);
    return numberOfDays;
}

