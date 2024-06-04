/* Stacks */

const letters = [];

const word = "john";

let rword = "";

// Adding letters of the word to a stack
for (let i = 0; i < word.lengthx; i++) {
  letters.push(word(i));
}

// Pop stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

const checkPalindrome = (() => {
  if (rword === word) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is not a palindrome`);
  }
})();
