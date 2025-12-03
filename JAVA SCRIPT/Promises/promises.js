// const promiseOne = new Promise(function (resolve,reject) {
//     // Do an async task
//     // DB calls,cryptography , network
//     setTimeout(function(){
//         console.log('Async Task is Completed');
//         resolve()
//     },2000 )
// })
// promiseOne.then(function () {
//     console.log('Promise consume');
    
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2 ");
//      resolve()   
//     } ,1000)
// }).then(function(){
//     console.log("Async 2 resolve");
// })

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve()
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function (){
        resolve({username:"vishal singh" ,email:'vishal123@gmail.com' })
    },1000)
})
promiseThree.then(function (user) {
    console.log(user);   
})