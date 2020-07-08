const catchSignChange = arr => {
  let result = 0;

  if (arr.length > 0) {
    arr.forEach((e, i, a) => {
      if ((e < 0 && a[i + 1] >= 0) || (e >= 0 && a[i + 1] < 0)) {
        result += 1;
      }
    });
  }

  return result;
};
