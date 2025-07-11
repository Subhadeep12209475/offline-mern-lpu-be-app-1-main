const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {Schema ,model} = mongoose;
const userSchema= new Schema(
  {
    description: String,
        Name: {
            type: String,
            trim: true,
        },
        Email : {
          type: String,
            required: true,
            unique: true,
            trim: true,
        },
        PhoneNumber :{
          type : Number,
          required: true,
            unique: true,
            trim: true,
        },
        Password :{
          type: String,
            required: true,
            unique: true,
            trim: true,
        },
        Role:{
          type: String,
          enum : ["user","admin","super-admin"]
        },
        Gender:{
          type: String,
          enum: ["Male","Female"]
        },
        Address :{
          type: String,
            required: true,
            unique: true,
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
    this.Password=
    await bcrypt.hash(this.Password,12);
  }
  next();
})
const UserModel = model("User", userSchema);


module.exports = {UserModel};
