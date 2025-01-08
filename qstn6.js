//Count the occurrence of each character in a string (ignoring spaces)

const sentence = "js python js python";

let charCount = {};  

sentence.split('').forEach(char => {
  if (char !== ' ') { 
    charCount[char] = charCount.hasOwnProperty(char) ? charCount[char] + 1 : 1;
  }
});

console.log(charCount);