const express = require("express");

const {userRegistrationController} = require("./controllers")
const authRouter = express.Router();

authRouter.post("/signup",userRegistrationController);


module.export={authRouter};