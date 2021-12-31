const sumAll = function(firstNum, lastNum) {
    let resultNum = 0;
    if (firstNum < 0 || lastNum < 0 || typeof firstNum !== "number" || typeof lastNum !== "number") {
        resultNum = "ERROR";
        return resultNum;
    }

    if (firstNum > lastNum) {
        start = lastNum;
        end = firstNum;
    } else {
        start = firstNum;
        end = lastNum;
    }
    for (let i = start; i <= end; i++) {
        resultNum += i;
    }
    return resultNum;
};

// Do not edit below this line
module.exports = sumAll;
