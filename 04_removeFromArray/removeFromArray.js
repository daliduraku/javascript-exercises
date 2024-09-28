const removeFromArray = function(a, num1=0, num2=0, num3=0, num4=0) {
    arr = [];

    for ( let i = 0; i < a.length; i++){
        if (a[i] !== num1 && a[i] !== num2 && a[i] !== num3 && a[i] !== num4){
            arr.push(a[i])
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
