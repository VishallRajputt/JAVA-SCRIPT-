// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS {IIFE}

(function Vishal() {
    console.log(`db connected`);
})();


(function vishall(){
    console.log(`DB CONNECTED TWO`);
})();

( (name)=> {
    console.log(`call me ,${name}`);
    
})('vishal')