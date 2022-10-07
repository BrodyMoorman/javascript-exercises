const sumAll = function(first, second) {
    let bigger = 0;
    let smaller = 0;
    let total = 0;
    if(first < 0 || second < 0){
        return 'ERROR'
    }
    if(!Number.isFinite(first)||!Number.isFinite(second)){
        return 'ERROR'
    }
    if(first > second){
        bigger = first;
        smaller = second;
    }else{
        bigger = second;
        smaller = first;
    }
    
    while(smaller <= bigger){
         total += smaller;
         smaller++;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
