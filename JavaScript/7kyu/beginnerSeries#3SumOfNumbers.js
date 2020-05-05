function getSum(a, b) {
    let result = 0;

    if (a === b) {
        return a;

    } else if (b > a) {
        while (!(a > b)) {
            result += a++;
        }

    } else {
        while (!(b > a)) {
            result += b++;
        }
    }
    return result;
}