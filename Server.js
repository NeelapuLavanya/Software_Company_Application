const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://0.0.0.0/ProjectDb",
    
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log(error);
  });

require("./UserInputDb");
const Details = mongoose.model("UserInfo");

app.post("/adduserinfo", async (req, res) => {
  const { projectname,projecttype,userprofile,budget,referencewebsites,companylogo,technologies,timeline,addads,moto} = req.body;
  try{
    await Details.create({
      projectname,
      projecttype,
      userprofile,
      budget,
      referencewebsites,
      companylogo,
      moto,
      addads,
      technologies,
      timeline
  });

  console.log("User registered successfully.");

  res.json({ status: "ok" });
  }
  catch(error){
    console.log(error)
    res.status(500).json({ status: "error", message: error });
  }

})

app.listen(5001, () => {
  console.log("server started");
});