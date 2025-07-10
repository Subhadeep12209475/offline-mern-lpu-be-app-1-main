const mongoose = required("mongoose");
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
    Timestamp : true,
  }

);
const UserModel = model("",userSchema);

module.exports = {UserModel};
