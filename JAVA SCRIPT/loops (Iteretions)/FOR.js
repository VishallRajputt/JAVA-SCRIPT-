// for Loop
// for (let i = 0; i <= 10; i++) {
//     const a = i;
//     console.log(a)
// }


// for( let a=0;a<=10;a++){
//     const b=a;
//     if(a==5){
//         console.log("5 is best number")
//     }
//   console.log(b)
// }

// for (let i = 0; i <=10; i++) {
//     console.log(`Outer loop value ${i}`);
//     for(let j=0; j<=10; j++){
//         console.log(`Inner loop value ${j} and outer loop value ${i}`);
//     }
    
// }

// for (let i = 0; i <=20; i++) {
//     console.log(`Table of ${i}`);
//     for(let j=0; j<=10; j++){
//         console.log( + i + '*' +j + '=' + i*j);
//     }
    
// }    // this is for table 

let myArray = ["vishal","mohit","Anushka","Rekha","Subash"]
//console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element)
}


// Break and continue

// for (let index = 1; index <=20; index++) {
//     if(index == 8){
//         console.log(`8 is best`)
//         break
//     }
//     console.log(`Value of index ${index}`)
    
// }

for (let index = 1; index <=20; index++) {
    if(index == 8){
        console.log(`8 is best`)
        continue
    }
    console.log(`Value of index ${index}`)
    
}