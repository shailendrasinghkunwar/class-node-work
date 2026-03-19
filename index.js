<<<<<<< HEAD
// server.js

const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config();


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('E-commerce API running on port'+PORT);
});
=======
import add from "./add.js";

const output = add(5, 10);
console.log(output);
import os from 'os';
console.log(os.platform())
>>>>>>> 75f523335af76942f75f7c79c8f19a052d90e495
