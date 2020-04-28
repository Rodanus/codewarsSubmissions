function solve(s) {
    // This helped to solve a part of the quiz: 
    // https://dev.to/bladesensei/get-alphabet-position-value-of-a-letter-javascript-70p

    const sum = {};

    for (let i = 0, n = 1; i < s.length; i++) {
        switch (s[i]) {
            case "a":
                n += 1;
                continue;

            case "o":
                n += 1;
                continue;

            case "e":
                n += 1;
                continue;

            case "i":
                n += 1;
                continue;

            case "u":
                n += 1;
                continue;
        }

        if (sum[n]) {
            sum[n] += s[i].charCodeAt(0) - 96;

        } else {
            sum[n] = s[i].charCodeAt(0) - 96;
        }
    }

    return Math.max(...Object.values(sum));
};