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
}

module.exports={userRegistrationController};