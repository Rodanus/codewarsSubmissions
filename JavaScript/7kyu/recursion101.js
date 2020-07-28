function solve(a, b) {
  while (!(a === 0 || b === 0)) {
    if (a >= b * 2) {
      a -= b * 2;
      continue;
    } else if (b >= a * 2) {
      b -= a * 2;
      continue;
    }
    return [a, b];
  }
  return [a, b];
}
