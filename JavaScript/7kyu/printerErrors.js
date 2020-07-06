function printerError(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] > "m" ? (result += 1) : null;
  }

  return `${result}/${s.length}`;
}
