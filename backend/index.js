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
    //data.save();
    console.log(data);
    res.send(data)
});
app.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedRecord = await userData.findByIdAndDelete(id);
  
      if (!deletedRecord) {
        return res.status(404).json({ error: "Record not found" });
      }
  
      console.log("Deleted Record:", deletedRecord);
      res.json({ message: "Password entry deleted successfully!" });
    } catch (error) {
      console.error("Error deleting password:", error);
      res.status(500).json({ error: "Server error" });
    }
  });
// Update your Express server (app.js or index.js)

// Add a PUT endpoint for updating passwords
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { url, username, pass } = req.body;

    const updatedRecord = await userData.findByIdAndUpdate(
      id,
      { url, username, pass },
      { new: true } // To get the updated record back
    );

    if (!updatedRecord) {
      return res.status(404).json({ error: "Record not found" });
    }

    console.log("Updated Record:", updatedRecord);
    res.json(updatedRecord); // Respond with updated record
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "Server error" });
  }
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

