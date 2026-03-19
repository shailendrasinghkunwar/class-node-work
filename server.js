const app=require("./app")
require("dotenv").config({
    path: ".env.production"
});
const port =process.env.port;
console.log("port:",port);
const jwtToken =process.env.jwtToken;
console.log("jwtt oken",jwtToken);
console.log("jwttoken",jwtToken);







