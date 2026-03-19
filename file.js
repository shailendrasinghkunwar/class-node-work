//what is call stack?
/*
empty stack: 
->line1 push to stack
->executed (if executable) then
->poped
continue till stack empty...
*/
const a = () =>{
    b();
    console.log("A", 2+3);//5
    
}
const b = () =>{
 c(); 
    console.log("hello B",2*3);//6
    
}
const c = () =>{
    console.log("hello C",2/3);//0.6
    
}
a();
/*
->A push to stack
->B push to stack
->C push to stack
->executed (if executable) then
->poped
->B executed (if executable) then
->poped
->A executed (if executable) then
->poped
*/