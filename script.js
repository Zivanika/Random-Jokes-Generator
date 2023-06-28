let jokes=["Debugging is like being a detective in a crime movie where you are also the murderer at the same time","Why did the programmer quit her job?-Because she didnt get arrays.","Why did the two java methods get a divorce ? -Because they had constant arguments.","Why do most Java programmers wear glasses? -Because they couldn't see sharp (C# get it? ;))"];
let a=Math.floor(Math.random() * 3);
console.log(a);
jk.innerHTML=jokes[a];
generateBtn.addEventListener("click", acquireJoke);
// console.log(jokes[a]);