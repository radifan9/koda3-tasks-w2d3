exports.triangleReversed = function (num) {
    console.log("\n---- Triangle Reversed Column Program ----");
    if(
        typeof num != "number" ||
        num < 0
    ) {
        throw new Error("Parameter harus bertipe data nomor dan harus nomor positif");
    }

    for (let i = 1; i <= num; i++) {
        let column = "";
        for (let j = i; j >= 1; j--) {
            column  = column + j + " " ;
        }
        console.log(column.trimEnd());
    }
};
