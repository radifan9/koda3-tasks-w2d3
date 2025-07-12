exports.countArray = function (arr) {
    console.log("\n---- Count Array Program ----");
    // Array must at least contain 1 element
    if (arr.length < 1 ) {
        throw new Error("Harus berisi setidaknya 1 element")
    }
    
    let num = 1;
    for (let i = 0; i < arr.length; i++) {
        num = num *  arr[i];
    }

    return num
}