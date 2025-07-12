exports.triangle = function (num) {
    console.log("\n---- Triangle Program ----");
    if(
        typeof num != "number" ||
        num < 0
    ) {
        throw new Error("Parameter harus bertipe data nomor dan harus nomor positif")
    }

    for (let i = 1; i <= num; i++) {
        let column = ''
        for (let j = 1; j <= i; j++) {
            column = column +  j + " ";
        }
        
        console.log(column.trimEnd());
    }
}