const mongoose = require('mongoose');
const dburl = 'mongodb+srv://micolatifa481:7rFgEotZ3RZ0ZmGe@cluster0.6cmzj.mongodb.net/RMC?retryWrites=true&w=majority&appName=Cluster0';

 module.exports=mongoose.connect(dburl)
.then(success=>{console.log("successfully connected to the basedonne")})
.catch(err=>{console.log("error via connection")})

const Intellectualschema =new mongoose.Schema({
   FirstName:String,
  LastName:String,
   Gender:String,
   Email:String,
   Personalinfo:String,
   PhoneNumber:String,
   country:String,
   Residence:String,
   DOB:String,
    SchoolName: String,
    Combination: String,
    FieldOfStudy: String,
    Degree: String,
    GraduationYear: String,
    OtherField: String,
    Organization: String,
    PersonalWebsite: String,
    MoreInformaton:String,
    Position: String,
    Location: String
},{collection:"Intellectuals"}
)
module.exports=mongoose.model("IntellectualModel",Intellectualschema);