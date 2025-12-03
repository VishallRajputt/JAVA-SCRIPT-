// Datatypes  (1). Primitive  (2). non-primitive

// (1).Primitive 
// 7 types : String , Int ,BigInt , Null , Undefine ,Boolean ,Symbols.

const score =100;
const scorValue =100.5;

const idLoggedIn= false
const outSideTemo= null

let userEmail;
const id =Symbol("123");
const  anotherId =Symbol("123")
// const BigNumber=123456789101112131415n;

console.log(typeof scorValue)
console.log(id === anotherId)



//  (2). Reference type /Non-primitive 
// Array , Object ,Function

 const a =["Vishal","Akshat","Ahinav"];
    let myObj= {
  name:"Vishall",
    age:22,
 }                     
//  jo {} ishke andr hai wo object hote han . Aur jo [] ishke andr hota hai wo array hota hai.
