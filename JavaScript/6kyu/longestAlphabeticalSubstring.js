function longest(str) {
  const result = [];
  let currentSubstring = "";
  for (let i = 0; i <= str.length; ++i) {
    if (str[i] <= str[i + 1]) {
      currentSubstring += str[i];
    } else {
      currentSubstring += str.charAt(i);
      currentSubstring !== "" ? result.push(currentSubstring) : null;
      currentSubstring = "";
    }
  }

  return result.sort((a, b) => b.length - a.length)[0];
}
