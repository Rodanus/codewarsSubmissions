function one(arr, fun) {
  let result = 0;

  arr.forEach(item => {
    fun(item) && result++;
  });

  return result === 1;
}
