const reverseString = function(str) {
    let outputString = "";
    // let stringArray = [];
    stringLength = str.length + 1;
    for (let i = 1; i < stringLength; i++) {
        //stringArray.push(str.substr(i, 1));
        outputString += str.substr((0 - i), 1);
    }
    return outputString;
    
    // let stringArray;
    // let outputString
    // take the string, and measure its length
    // for loop, i starts at 0, runs as long as i < string.length, ++i // ++ in front of i, because string doesn't take 0 into account
        // stringArray.push(string.substr(i,2)); // take the character of the string, pointed to by i, and put it in an array;
    // output // when loop is finished, build the reverse string
        // for loop, j starts at 0, runs as long as j < string.length, ++j
        // outputArray.slice()
};

// alternatively, maybe I can do a method without an array, by subtracting i from 0, and using that as the start position on the substr() method, 
// for instance: outputString += string.substr((0 - i), 2);

// Do not edit below this line
module.exports = reverseString;
