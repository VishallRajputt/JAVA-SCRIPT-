// alert('Hello world')
document.write('Hello world')
// setTimeout(function(){
//     alert('I am inside of setTimeout')
// } ,5000 )

let a = setTimeout(function(){
    alert('I am inside of setTimeout')
} ,5000 );
let b= prompt("Do you want to run settimeout")
if ("n"== b) {
    clearTimeout(a)
}
console.log(a);
