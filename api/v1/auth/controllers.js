const {userModel} = require("../../../models/user_schema");
const userRegistrationController=async (req,res)=>{
  const data = req.body;
  if(!data.email || !data.password){
    res.status(400).json({
      isSuccess :false,
      message : "email  and password is requird",
      data :{},
    })
    return;
  }
  const newUser = await userModel.create(data);
  console.log("=>",newUser);
  delete newUser.password;
  console.log("--->",newUser);

  res.status(201).json({
    isSuccess :true,
    message :"User created",
    data :{
      user:newUser,
    }
  })
}

module.exports={userRegistrationController};