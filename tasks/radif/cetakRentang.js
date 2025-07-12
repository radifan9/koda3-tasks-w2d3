exports.buatRentang = function (mulai, selesai) {

    console.log("\n---- Print Range Program ----");
    // Validation : mulai dan selesai harus bertipe angka
    if (typeof mulai != "number" ||
        typeof selesai != "number"
    ) {
        throw new Error("Semua argument harus bertipe number");
    }

    let temp = "";
    for (let i = mulai; i <= selesai; i++) {
        temp = temp + i;
        if (i != selesai) {
            temp += ", ";
        }
    }
    console.log(temp);
};
