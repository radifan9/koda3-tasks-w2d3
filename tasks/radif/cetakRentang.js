exports.buatRentang = function (mulai, selesai) {
    console.log("\n---- Print Range Program ----");
    let temp = "";
    for (let i = mulai; i <= selesai; i++) {
        temp = temp + i;
        if (i != selesai) {
            temp += ", ";
        }
    }
    console.log(temp);
};
