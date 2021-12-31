const leapYears = function(inputYear) {
   let outputYear;
    if ((inputYear % 4) !== 0) outputYear = false;
    else if ((inputYear % 4) === 0 && (inputYear % 100) !== 0) outputYear = true;
    else if ((inputYear % 100) === 0 && (inputYear % 400) === 0) outputYear = true;
    else outputYear = false;
    return outputYear;

};
// Do not edit below this line
module.exports = leapYears;