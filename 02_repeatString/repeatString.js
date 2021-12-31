const repeatString = function(string, num) {
    let theString = '';
    if (num < 0) {
        theString = "ERROR";
        return theString;
    } else {
        for (i = 0; i < num; i++) {
            theString += string;
        }
    }
    return theString;
};

// Do not edit below this line
module.exports = repeatString;
