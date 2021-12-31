const removeFromArray = function(argumentCollection, ...removeArguments) {
    let args = Array.from(argumentCollection);
    let checkArgument;
    arrayLength = args.length;
    let outputArray = [];
    checkToRemove: for (let i = 0; i < args.length; i++) {
        checkArgument = args[i]
        for (removeArgument of removeArguments) {
            if (checkArgument === removeArgument) {
                continue checkToRemove;
            }
        } 
        outputArray.push(checkArgument);
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
