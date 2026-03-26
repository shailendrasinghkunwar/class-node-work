
const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config();


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('E-commerce API running on port'+PORT);
});
import add from "./add.js";

import os from 'os';
console.log(os.platform())
if 

