const { default: mongoose } = require("mongoose")

mongoose.connect("mongodb://localhost:27017/passwords");

const userSchema= mongoose.Schema({
    url:String,
    username:String,
    pass:String,
});

module.exports=mongoose.model("user",userSchema);