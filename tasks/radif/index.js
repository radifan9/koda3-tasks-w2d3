const createTriangle = require("./createTriangle")
const calculateArray = require("./calculateArray")
const createTriangleReversed = require("./createTriangleReversed")
const processOddNumbers = require("./processOddNumbers")

module.exports = {
    triangle: createTriangle.triangle,
    countArray: calculateArray.countArray,
    triangleReversed: createTriangleReversed.triangleReversed,
    processNumbers : processOddNumbers.processNumbers
};