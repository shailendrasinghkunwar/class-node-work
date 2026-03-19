

const sum=(a,b) =>{
    return a+b;
}
const div =(a,b) =>{
    return a/b;}
    
const sub= (a,b) =>{
        return a-b;
     }
     module.exports={
        sum,
        div,
        sub
     };
     

// server.js

const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config();


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('E-commerce API running on port'+PORT);
});
import add from "./add.js";

const output = add(5, 10);
console.log(output);
import os from 'os';
console.log(os.platform())

