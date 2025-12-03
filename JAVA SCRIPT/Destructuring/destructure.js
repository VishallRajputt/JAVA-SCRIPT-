let arr= [1,2,3,4,5,6,7,8,9,10]
// let [a,b,c,d,e,f,...rest]=arr
// let [a, , , , , ,...rest]=arr
// console.log(a,rest);
// let {a,b}={a:1,b:5}
// console.log(a,b);

let arr1=[1,2,3]
let obj1={...arr1}
console.log(obj1);

function sum(v1,v2,v3) {
return v1+v2+v3    
}
console.log(sum(...arr1));


let obj2={
    name:"vishal",
    age:21,
    email:'vishal123@gmail.com',
    company_name:'xyz'
}
// console.log({...obj2,name:'Vishal Singh'});
console.log({name:'Vishal Singh',...obj2});//This will print the obj2 without changing any value


