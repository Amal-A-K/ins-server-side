const mongoose=require('mongoose')
const Schema=mongoose.Schema

const StudentSchema=new Schema({
    Name:{
        type:String
    },
    StudentId:{
        type:String
    }
})
const ClassSchema=new Schema({
   Year:{
    type:String
   },
   Category:{
    type:String
   },
   Branch:{
    type:String
   },
   Section:{
    type:String
   },
   Student:[StudentSchema] 
})

module.exports=mongoose.model("classroomschema",ClassSchema);