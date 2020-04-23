function getSumOfDigits(integer) {
    let sum = 0;
    let digits = integer.toString();
    for (let ix = 0; ix < digits.length; ix++) {
        sum += Number(digits[ix]);
    }
    return sum;
}