const longestRepetition = s => {
  let prevChar = ["", 0],
    currentlyTrackingChar = "",
    currNumOfAppearance = 0;

  const storeChar = () => {
    prevChar[0] = currentlyTrackingChar;
    prevChar[1] = currNumOfAppearance;
  };

  const trackNewChar = letter => {
    currentlyTrackingChar = letter;
    currNumOfAppearance = 1;
  };

  for (const letter of s) {
    if (letter === currentlyTrackingChar) {
      currNumOfAppearance++;

      if (currNumOfAppearance > prevChar[1]) {
        storeChar();
      }
    } else if (currNumOfAppearance > prevChar[1]) {
      storeChar();
      trackNewChar(letter);
    } else if (letter !== currentlyTrackingChar) {
      trackNewChar(letter);
    }
  }

  return prevChar;
};
