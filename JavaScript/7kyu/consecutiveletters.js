function solve(s) {
  let lettersAsci = [];

  for (let i = 0; i < s.length; i++) {
    lettersAsci.push(s.charCodeAt(i));
  }

  const result = lettersAsci
    .sort((a, b) => a - b)
    .filter((e, i, a) => {
      return a[i + 1] ? a[i + 1] - e === 1 : e;
    });

  return result.length === s.length;
}
