// Object literals
const user={
    name:'vishal singh',
    loggInCount:8,
    signedIn:true,
    getUserDetail:function () {
        // console.log(`username,${this.name}`);
        console.log(this);
        
    }
}
// console.log(user.name);
// console.log(user.getUserDetail());
// console.log(this);

// Constructor Function

// const promiseOne = new Promise()
// const date = new Date() 

function User (username,loggInCount,isLoggedIn) {
    this.username = username;
    this.loggInCount = loggInCount;
    this.isLoggedIn = isLoggedIn;
    this.Gretting = function (){
        console.log(`welcom ${this.username}`); 
    }
    return this
}
const UserOne = new User('vishal',8,true)
const userTwo = new User("vishal Singh",12,false)
console.log(UserOne);
console.log(userTwo);
