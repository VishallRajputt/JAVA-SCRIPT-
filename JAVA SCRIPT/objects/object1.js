// const tinderUser= new Object() // singleton Object
const tinderUser = {} //non- singleton object

tinderUser.id="Vishallrajputt"
tinderUser.name='vishal rajput'
tinderUser.password= 124455
tinderUser.email='vishal123@gmail.com'
// console.log(tinderUser);


const regularUser= {
    email: 'vishal9452@gmail.com',
    Full_Name: {
        user_Name:{
            first_Name:'vishal',
            last_name:'Singh'
        }
    } 
}

// console.log(regularUser.Full_Name.user_Name.first_Name);


const obj1={ 1:'A',2:'B'}
const obj2={ 3:'C',4:'D'}
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3);

