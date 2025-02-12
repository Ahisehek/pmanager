const express= require("express");
const cors = require("cors");
const userData = require("./userdata");
const app=express();
const port= 3000;

app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello abhishek")
});

app.post("/passwords",async (req,res)=>{
    let {url,username,pass}=req.body;
    const data= await userData.create({
        url,
        username,
        pass,

    })
    data.save();
    console.log(data);
    res.send(data)
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

