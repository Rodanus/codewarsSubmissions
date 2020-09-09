const generateName = () => {
  // 65 => 90 // http://www.asciitable.com/ || https://www.w3schools.com/charsets/ref_html_ascii.asp
  // loop 6 times
  // get a random number between 65 and 90
  /* turn that number to the the desired letter (ascii table) and add it
       to a variable. */
  // return the value

  let result = "";
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.random() * (90 - 65) + 65;
    result += `${String.fromCharCode(randomNum)}`;
  }
  return result;
};
