const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "rno":String,
        "admno":String,
        "college":String
    }
)

let studentmodel=mongoose.Model("students",schema);
module.exports={studentmodel}
