const express =require('express');
const app  =express ();
app.get("/",(req,res) => {
    res.send("server setup done");

});
app.listen(3000,()=>{
    console.log("server running at port 3000")
})
app.get ("/home" ,(req,res)=>{
    res.send("home page down ");
});