
/* Function List:
1. getCalendar(calendarDay) - creates the calendar table for the month
specified in the calendarDay parameter. The current date is highlighted in the table.

2. writeCalTitle(calendarDay) - writes the title row in the calendar table


3. writeDayNames() - writes the weekday title rows in the calendar table


4. getDaysInMonth(calendarDay) - returns the number of days in the month from calendarDay

5. writeCalDays(calendarDay) - writes the daily rows in the calendar table, highligthing calendarDay
*/


/**
 * creates the calendar table for the month specified in the calendarDay parameter.
 * @param {date} calendarDay 
 */
function getCalendar(calendarDay) {

    let calDate;
    if (calendarDay != null) {
        calDate = new Date(calendarDay)
    } else {
        calDate = new Date();
    }

    // create an html table 
    document.write('<table id="calendar_table">')

    // call the  writeCalTitle(calendarDay) - writes the title row in the calendar table
    writeCalTitle(calDate);

    // call the writeDayNames function
    writeDayNames();

    // call writeCalDays
    writeCalDays(calDate);

    document.write('</table>')

} // end function getCalendar(calendarDay)



/**
 * rrites the title row in the calendar table
 * @param {Date} calendarDay 
 */
function writeCalTitle(calendarDay) {
    // declare monthName array
    let monthName;
    //initialize monthName
    monthName = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    // extract the current month and year
    let thisMonth = calendarDay.getMonth();
    let thisYear = calendarDay.getFullYear();

    // write the table heading 
    document.write('<tr>');
    document.write('<th id="calendar_head" colspan="7">');
    document.write(monthName[thisMonth] + ' ' + thisYear);
    document.write('</th>');
    document.write('</tr>');
} // end function writeCalTitle


/**
 * writes the weekday title rows in the calendar table
 */
function writeDayNames() {
    // declare an array of day name 
    let dayName = [
        'Sun', 'Mon', 'Tue',
        'Wed', 'Thu', 'Fri',
        'Sat'
    ];

    // display day name in a new tr
    document.write('<tr>');
    for (let dayCount = 0; dayCount < dayName.length; dayCount++) {
        document.write('<th class="calendar_weekdays">' + dayName[dayCount] + '</th>');
    }
    document.write('</tr>');
} // end function writeDayNames

/**
 * returns the number of days in the month from calendarDay
 * @param {Date} calendarDay 
 */
function getDaysInMonth(calendarDay) {
    // extract the current month and year 
    let thisMonth = calendarDay.getMonth();
    let thisYear = calendarDay.getFullYear();

    // create dayNumber array
    let dayNumber = [
        31, 28, 31,
        30, 31, 30,
        31, 31, 30,
        31, 30, 31
    ];

    // return the number of days in the current month
    return (dayNumber[thisMonth]);
} // end function getDaysInMonth


/**
 * writes the daily rows in the calendar table, highligthing calendarDay
 * @param {Date} calendarDay 
 */
function writeCalDays(calendarDay) {
    let currentDay = calendarDay.getDate();
   // alert(currentDay);

   // determine the start of the month 
   let dayCount = 1;

   // return the number of days in the current month
   let totalDays = getDaysInMonth(calendarDay);
    // alert(totalDays);

   // set the day of the first day of the month 
   calendarDay.setDate(1);

   // return the day of the week of the first day
   let weekDay = calendarDay.getDay();
   // alert(weekDay);

   // write blank cells precessding the starting day 
    document.write('<tr>');
    for (let weekD = 0; weekD < weekDay; weekD++) {
        // write empty cells
        document.write('<td>&nbsp;</td>');
    }

    // write cells for each day of the month
    while(dayCount <= totalDays) {
        // write the table rows and cells 
        if ( weekDay === 0 && dayCount !== 1) {
            document.write('<tr>');
        } // end if block

        if ( dayCount == currentDay) {
            document.write('<td class="calendar_dates" id="calendar_today">' + dayCount + '</td>');
        } else {
            document.write('<td class="calendar_dates">' + dayCount + '</td>');
        } // end else

        if (weekDay == 6) {
            // close the tr
            document.write('</tr>');
        }

        // move to the next day
        dayCount++;
        calendarDay.setDate(dayCount);
        weekDay = calendarDay.getDay();
    } // end while loop

    // close tr
    document.write('</tr>');
    
} // end function writeCalDays