const reverseString = function(string) {
    const len = string.length
    let newString = ""
    for(let i = (len-1); i >=0;i--){
        newString += string[i];
    }
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
