const reverseString = function(str) {
    if (str === ""){
        return ""
    }
    const arr = str.split("");
    const tempArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        tempArr.push(arr[i])
    }
    const finalString = tempArr.join("");
    return finalString
};

// Do not edit below this line
module.exports = reverseString;
