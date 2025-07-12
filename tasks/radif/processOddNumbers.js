exports.processNumbers = function (arr) {
    console.log("\n---- Process Numbers Program ----");

    let temp = 1;
    let isOdd = false; // Buat variable flag, jadi true jika ada ganjil
    for (let i = 0; i < arr.length; i++) {
        // Cek apakah ganjil
        if (arr[i] % 2 != 0) {
            temp = temp * arr[i];
            isOdd = true;
        }
    }

    if (isOdd == false) {
        return 1;
    }

    return temp;
};
