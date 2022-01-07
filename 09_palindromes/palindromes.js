const palindromes = function (word) {
    // create an array from the word, but without the spaces
    processedWord = word.toLowerCase().replace(/[^A-Za-z]/g, "");
    return (
        processedWord
            .split("")
            .reverse()
            .join("") == processedWord
    );
}


// Do not edit below this line
module.exports = palindromes;
