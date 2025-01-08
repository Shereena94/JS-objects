//Const sentence= "js python js python" . display the count of each word


const sentence = "js python js python";

let output = []; 
sentence.split(' ').forEach((word)=>output.hasOwnProperty(word)?output[word]+=1:output[word]=1);
console.log(output);