//STEP 1
function halfNumber(num) {
    let result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}

//STEP 2
function squareNumber(num) {
    let result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}

//STEP 3
function percentOf(num1, num2) {
    let result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}

//STEP 4
function findModulus(num1, num2) {
    result = num2 % num1;  // Corrected modulus calculation
    console.log(`${result} is the modulus of ${num1} and ${num2}.`);
    return result;
}

halfNumber(5);
squareNumber(3);
percentOf(2, 4);
findModulus(4, 10);