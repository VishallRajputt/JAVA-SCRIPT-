// First way to declare string

const name = "vishal";
const bodyCount = 50;
//console.log(name+bodyCount);  this is the old method

console.log(`My name is ${name} and my Bodycount is ${bodyCount}`);

// Second way to dewclare string

const movieName = new String("vishal");
// console.log(movieName);
// console.log(movieName[0]);
console.log(movieName.charAt(2));
console.log(movieName.indexOf("s"));

const newString = movieName.substring(0, 6);
console.log(newString);

const anotherString = movieName.slice(-6, 2);
console.log(anotherString);

const newStringOne = "    vishal     ";
console.log(newStringOne);
console.log(newStringOne.trim()); ///this is use to remove extra space

const url = "https://vishal.com/vishal%20singh";
//They are use to Replace the any String in URL
console.log(url.replace("%20", "-"));

//this function are use to ask any thing about URL
console.log(url.includes("vishal"));
