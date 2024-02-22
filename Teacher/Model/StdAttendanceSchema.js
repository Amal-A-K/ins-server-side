const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const AttendanceSchema=new Schema({
    ScheduleId:{
        type:String,
        required:true
    },
    StudentId:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("attendance",AttendanceSchema);