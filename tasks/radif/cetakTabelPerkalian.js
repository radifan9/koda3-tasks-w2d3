exports.cetakTabel = function (num) {
    console.log("\n---- Print Table Program ----");
    if(
        typeof num != "number" ||
        num < 0
    ) {
        throw new Error("Parameter harus bertipe data nomor dan harus nomor positif");
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}