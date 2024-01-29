// 6. Write a JavaScript program to determine whether
//    a given year is a leap year in the Gregorian calendar

const leapYear = (year) => {
  (year % 4 === 0) || (year % 100 === 0) || (year % 400 === 0)
    ? console.log(`${year} is leap year`)
    : console.log(`${year} is not a leap year`);
};

leapYear(2016);
leapYear(2006);
leapYear(1996);
leapYear(1997);
leapYear(1800);