const daysLeftUntilChristmas = () => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const christmasDate = new Date(currentYear, 11, 25);

    if(currentDate > christmasDate) {
        christmasDate.setFullYear(currentYear + 1);
    }

    // time diff in miliseconds
    const timeDifference = christmasDate.getTime()  - currentDate.getTime();
    
    // covert milliseconds to day
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
    
    return daysLeft
}

const target = daysLeftUntilChristmas();

console.log(`The days left before christmas: ${target}`);