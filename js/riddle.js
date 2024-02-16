"use strict";

function check(riddle, answer) {
  const userInput = prompt(riddle);

  return userInput
    ? answer.toLowerCase() === userInput.toLowerCase()
    : "Vi ne vveli ni chego";
}

console.log(check("Dage ne samolet, a s krilyami", "samolet"));
console.log(check("Cherez vodu on provodit", " most"));
