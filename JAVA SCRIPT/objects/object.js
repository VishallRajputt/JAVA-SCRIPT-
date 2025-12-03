// OBJECT LITERALS
const mySym = Symbol('key1')

const vsUser= {
    name : "vishal",
    "Full Name": 'Vishal Singh',
    [mySym]:'Mykey2',
    age : 18 ,
    email: 'vishal@gmail.com',
    location: 'Mirzapur',
    isLoggedin: false,
    lastLoggedInDay: [ 'monday','saturday']
    
}

// console.log(vsUser.name);
// console.log(vsUser["email"]);
// console.log(vsUser["Full Name"]);
// console.log(vsUser[mySym]);

// vsUser.age=21
// console.log(vsUser);
// Object.freeze(vsUser);
// vsUser.name='vishalll'

vsUser.greeting=function(){
    console.log('hello vishal');
}
vsUser.greetingTwo=function(){
    console.log(`My Name, ${this["Full Name"]}`);   
}

console.log(vsUser.greeting());
console.log(vsUser.greetingTwo());

