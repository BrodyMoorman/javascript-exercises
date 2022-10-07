const repeatString = function(string, num) {
    let answer = "";
    if(num < 0){
        return "ERROR"
    }
    if(string === ''){
        return ''
    }

    while(num > 0){
        answer = answer + string;
        num--

    }
    return answer;
    
};

// Do not edit below this line
module.exports = repeatString;
