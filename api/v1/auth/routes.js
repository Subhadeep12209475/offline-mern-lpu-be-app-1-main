const express = require("express");
const authRouter = express.Router();

authRouter.post("/signup",()=>{
  console.log("Hello");
});

export{authRouter};