//Const sentence = "Hello world" 
// display the count of each wordㅤ

const sentence = "hello world";

let output = []; 
sentence.split(' ').forEach(word=>output.hasOwnProperty(word)?output[word]+=1:output[word]=1);
console.log(output);