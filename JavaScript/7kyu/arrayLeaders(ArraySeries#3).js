const arrayLeaders = numbers => {
  const sum = arrOfNumbers => {
    let sumResult = 0;
    arrOfNumbers.forEach(e => (sumResult += e));
    return sumResult;
  };
  let result = [];

  numbers.forEach((e, i, a) => {
    const rightSideElementsSum = sum(a.slice(i + 1));
    if (e > rightSideElementsSum) {
      result.push(e);
    }
  });

  return result;
};
