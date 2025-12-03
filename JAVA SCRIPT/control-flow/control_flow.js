// const temprature=41;
// if (temprature<50) {
//     console.log('Less than 50');
    
// }
// else{
//     console.log('greater than 41');
    
// }

// const score=200
// if (score>100) {
//     const user='fly'
//     console.log(`user power:${user}`);
// }
// console.log(`user power:${user}`);


// const balance=1000
// if (balance<500) {
//     console.log('less than 500 ');
// }else if(balance<750){
//     console.log('less than 750 ');
// }else if(balance<900){
//     console.log('less than 900 ');
// }else{
//     console.log('Less than 1200');
// }


const userLoggedIn=true
const debitCard=true
const loggedInfromGoogle=false
const  loggedInfromGmail=true

if (userLoggedIn && debitCard) {
    console.log('user allow to buy ');
}if (loggedInfromGoogle || loggedInfromGmail) {
    console.log('User are allow to loggin');
}