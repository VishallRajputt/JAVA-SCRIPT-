const user ={
    name:'vishal',
    price: 999,

    welcomeMassage: function () {
        console.log(`${this.name}, welcome to the website`);
        console.log(this);
        
    }

}
// user.welcomeMassage();
// user.name='vishal Singh'
// user.welcomeMassage()

// function ghughri() {
//     let username='vishal'
//     console.log(this.username);
    
// }
// ghughri();

// const chai =function () {
//     let username='vishal'
//     console.log(this.username);

// }
// chai();


const chai = () => {
    let username='vishal'
    console.log(this);
}
// chai();


//  const addTwo=(num1,num2)=>{
//      return num1+num2
// }
// console.log(addTwo(10,20));


// const addTwo=(num1,num2)=> num1*num2
// console.log(addTwo(10,20));


// const addTwo=(num1,num2)=> (num1*num2)
// console.log(addTwo(10,20));

const addTwo=(num1,num2)=> ({username:'Vishal'})
console.log(addTwo(10,20));