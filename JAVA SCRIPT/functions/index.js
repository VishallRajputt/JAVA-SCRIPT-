// Basic Function
// function sayMyNAme(){
//     console.log("V")
//     console.log("i")
//     console.log("s")
//     console.log("h")
//     console.log("a")
//     console.log("l")
// }
// sayMyNAme()

// Add Two Number

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
    
// }
// addTwoNumber(10,20)

// Add three Number

// function addTwoNumber(A,B,C){
//     console.log(A+B+C);
    
// }
// addTwoNumber(10,20,30)

function addThreeNumber(a,b,c){

    let Vishal = a+b+c
     return Vishal    
}
 let Vishal= addThreeNumber(5,3,50);
//  console.log("Vishal:",Vishal);
 

function loginIdUserMassage(user){
    return`just logged in ${user}`
}
// console.log(loginIdUserMassage("vishal")); --> output is :- just logged in vishal
// console.log(loginIdUserMassage());--> output is:-just logged in undefine 


function loginIdUserMassage(user){
if (user===undefined) {
    console.log("Please Enter a username");
    return
}
    return`just logged in ${user}`

}
// console.log(loginIdUserMassage("vishal"));


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(10,20,30));
 

const user={
    User_name:'vishal',
    age : 22,
    address:'Mirzapur'
}

function manageTheObject(anyobject){
  console.log(`user Name:${anyobject.User_name},age:${anyobject.age}
    , address:${anyobject.address}`);
}
// manageTheObject(user) 
// manageTheObject({User_name:'vishal', age:22})


const myArray=[1,2,3,4,5,]
function retunrnFirstValue(getArray){
    return getArray[2]
}
console.log(retunrnFirstValue(myArray))