let a = prompt('Enter first number');
let b = prompt('Enter Second number ');
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError('Sorry String are Not allowed')
}
sum = parseInt(a)+ parseInt(b)
// console.log("The sum is",sum);

try {
    console.log("The sum is",sum*x);    
} catch (error) {
    console.log("Erro aa gya bhai");
    
}

finally{
    console.log('Files are closed');
    
}//Finally are use in under the  functions
