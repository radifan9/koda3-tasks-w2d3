/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task Radif
 */

// import your tasks here
const radif = require("./tasks/radif");

function taskRadif () {

    // No 1
    // Program: Create triangle
    // Failed
    try {
        radif.triangle("abc");     
    } catch (error) {
        console.log(error.message);
    }

    // Program: Create triangle
    // Failed
    try {
        radif.triangle(-1);     
    } catch (error) {
        console.log(error.message);
    }

    // Program: Create triangle
    // Success
    try {
        radif.triangle(2);     
    } catch (error) {
        console.log(error.message);
    }

    // Program: Create triangle
    // Success
    try {
        radif.triangle(5);     
    } catch (error) {
        console.log(error.message);
    }

    // No 2
    // Program: Count Array
    // Success
    console.log(radif.countArray([1, 2, 3, 4, 5]));
    

    // Program: Count Array
    // Success
    console.log(radif.countArray([2, 2, 2, 2, 2]));

    // No 3
    // Program: Create Reversed Triangle Column
    // Failed
    try {
        radif.triangleReversed("abc");     
    } catch (error) {
        console.log(error.message);
    }

    // Program: Create Reversed Triangle Column
    // Failed
    try {
        radif.triangleReversed(-1);     
    } catch (error) {
        console.log(error.message);
    }

    // Program: Create Reversed Triangle Column
    // Success
    try {
        radif.triangleReversed(1);     
    } catch (error) {
        console.log(error.message);
    }

    // Program: Create Reversed Triangle Column
    // Success
    try {
        radif.triangleReversed(2);     
    } catch (error) {
        console.log(error.message);
    }

    // Program: Create Reversed Triangle Column
    // Success
    try {
        radif.triangleReversed(5);     
    } catch (error) {
        console.log(error.message);
    }

    // No 4
    // Program: Process numbers
    // Success
    try {
        console.log(radif.processNumbers([1, 2, 3, 4, 5]));   
    } catch (error) {
        console.log(error.message);
    }

    // Program: Process numbers
    try {
        console.log(radif.processNumbers([2, 4, 6, 8]));   
    } catch (error) {
        console.log(error.message);
    }

    // No 5
    // Program: Print table
    // Failed
    try {
        radif.cetakTabel("abc");   
    } catch (error) {
        console.log(error.message);
    }

    // Program: Print table
    // Failed
    try {
        radif.cetakTabel(-1);   
    } catch (error) {
        console.log(error.message);
    }

    // Program: Print table
    // Success
    try {
        radif.cetakTabel(3);   
    } catch (error) {
        console.log(error.message);
    }

    // No 6
    // Program: Print range
    // Success
    radif.buatRentang(1, 5);   
    

    // Program: Print range
    // Failed
    radif.buatRentang(5, 10); 

}
taskRadif();
