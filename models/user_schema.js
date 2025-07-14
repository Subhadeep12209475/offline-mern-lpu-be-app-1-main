const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {Schema ,model} = mongoose;
const userSchema= new Schema(
  {
    description: String,
        name: {
            type: String,
            trim: true,
        },
        email : {
          type: String,
            required: true,
            unique: true,
            trim: true,
        },
        phoneNumber :{
          type : Number,
            unique: true,
            trim: true,
        },
        password :{
          type: String,
            required: true,
            unique: true,
            trim: true,
        },
        role:{
          type: String,
          enum : ["user","admin","super-admin"]
        },
        gender:{
          type: String,
          enum: ["Male","Female"]
        },
        address :{
          type: String,
          
            trim: true,
        }
  },
  {
    versionKey: false,
    timestamps: true, 
  }

);

userSchema.pre("save",async function(next){
  if(this.isModified("password")){
    this.password=
    await bcrypt.hash(this.password,12);
  }
  next();
})
const UserModel = model("User", userSchema);


module.exports = {UserModel};
