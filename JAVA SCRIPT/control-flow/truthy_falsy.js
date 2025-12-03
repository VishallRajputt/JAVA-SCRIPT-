const userEmail=[]
if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Don't have user Email");
}

// falsy value
// false,0 ,-0,BigInt 0n,"",null,undefined,NaN
// Truthy value
// "0",'false'," ",[],{}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");   
// }

const emptyObj ={}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is  empty");
}


//  Nullish Coalescing Operator ( ??) null ,Undefined
let val1;
// val1=10 ?? 20 ;
// val1 = null ?? 20
// val1 =undefined ?? 15
val1=null ?? 10 ?? 20
console.log(val1);

// Terniary Operator

//  condition ? true: false

const iceCreamPrice=100
iceCreamPrice <= 80 ? console.log('less than 80') :
 console.log("More than 80");

