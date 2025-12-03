function nice(name){
    console.log("hey " + name + " you are nice !" );
    console.log("hey " + name + " your Tshirt is cool !" );
    console.log("hey " + name + " you are looking good!" );
    
}
// nice("Vishal");

function Sum(a,b) {
    console.log(a + b);
}
// Sum(100,200);

function sum(a,b,c) {
    console.log(a + b +c);
    return a + b + c;
}
// result = sum(1,2,3);
// console.log("The sum of these number is:", result);


function sum(a,b,c) {
    console.log(a + b +c);
    return a + b + c;
}
// result = sum(1,2,3);
// result1 = sum(10,20,30);
// result2 = sum(100,200,300);

// console.log("The sum of these number is:", result);
// console.log("The sum of these number is:", result1);
// console.log("The sum of these number is:", result2);

// ***************************** Default parameter *******************

function sum(a,b,c ,d =10) {
    console.log(a + b +c);
    return a + b + c + d;
}
result = sum(1,2,3);
result1 = sum(10,20,30);
result2 = sum(100,200,300);

console.log("The sum of these number is:", result);
console.log("The sum of these number is:", result1);
console.log("The sum of these number is:", result2);
