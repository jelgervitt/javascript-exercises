const fibonacci = function(num) {
    // loop that counts the rounds
    let previous = 0
    let current = 1
    let result;
    if (Number(num) < 0) {
        result = "OOPS"
     } else if (Number(num) === 1) {
         result = 1;
     } {
        for (i = 1 ; i < Number(num) ; ++i) {
            result = previous + current;
            previous = current;
            current = result;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;