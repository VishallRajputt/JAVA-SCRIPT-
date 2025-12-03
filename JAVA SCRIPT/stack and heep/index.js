// memory are two type (1).heap (2).stack
// heap have non-primitive value
// stack have primitive value

let myName ='vishal'
 
let Name=myName
Name='vishal singh'

console.log(myName);
console.log(Name);

let userOne={
    name:'vishal',
    Gmail:'vishal@gmail.com'
}
let userTwo=userOne
userTwo.Gmail='vishallrajputt123@gmail.com'
console.log(userTwo.Gmail);
console.log(userOne.Gmail);
console.log(userOne);