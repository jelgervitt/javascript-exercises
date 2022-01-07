const palindromes = function (word) {
    // create an array from the word, but without the spaces
    let theword = [];
    let reverseWord = [];
    theWord = word.map(word => word.split(","));
    // now turn the array around
    for (letter in theWord) {
        reverseWord.unshift(letter);
    }
    // now compare both arrays, will return true if palindrome
    for (let i = 0 ; i < theWord.length ; i++) {
        (theWord[i] === reverseWord[i])
    };
};


// Do not edit below this line
module.exports = palindromes;
