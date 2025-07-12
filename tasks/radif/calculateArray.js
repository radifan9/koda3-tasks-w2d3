exports.countArray = function (arr) {
    console.log("\n---- Count Array Program ----");
    
    let num = 1;
    for (let i = 0; i < arr.length; i++) {
        num = num *  arr[i];
    }

    return num;
};
