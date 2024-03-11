const TeacherSchema = require('../Model/TeacherSchema');
const mongoose = require('mongoose');
const ObjectId=new mongoose.Types.ObjectId
module.exports = {
    addTchr: async (req, res) => {
        const { InstitutionId } = req.body;
        try {
            const result = await TeacherSchema.create({
                InstitutionId,
                Teacher: [],
            });
            console.log(result);
            const tchr = result._id
            res.status(200).json({ Success: "Success", "Teacherid": tchr })
        }
        catch (err) {
            res.status(400).json({ err })
        }
    },
    addTeacher: async (req, res) => {
        const { teacher } = req.body
        const { id } = req.params
        console.log(id,req.body)
        const result4 = await TeacherSchema.findByIdAndUpdate(id, { $push: { Teacher: req.body } })
        if(result4){
            res.status(200).json({result4})
        }else{
            res.status(400).json("failed")
        }
    },
    getTchr: async (req, res) => {
        try {
            const result2 = await TeacherSchema.find();
            console.log(result2.data);
            res.status(200).json({ result2 })
        } catch (err) {
            res.status(400).json("Failed")
        }
    },
    getTchrById: async (req, res) => {
        const id = req.params.id;
        try {
            const result3 = await TeacherSchema.findById(id)
            res.status(200).json({ result3 })
        }
        catch (err) {
            res.status(400).json("Failed to get details")
        }
    },
    update: async (req, res) => {
        const id = req.params.id
        try {

            await TeacherSchema.findByIdAndUpdate(id, {
                InstitutionId: req.body.InstitutionId,
                Teacher: req.body.Teacher
            })
            res.status(200).json("successfully updated")
        }
        catch (err) {
            res.status(400).json("updation failed")
        }
    },
    updateOneTeacher:async(req,res)=>{
        const indexid=req.params.indexid;
        const teacherid=req.params.teacherid;
        console.log(indexid,"index id");
        console.log(teacherid,"teacher id");
        try{
            const teacherIndex=await TeacherSchema.findById(indexid)
            // console.log(teacherIndex,"teacher index");
            // console.log(teacherIndex.Teacher,"inside teacher index");
            if(!teacherIndex){
                return res.status(400).send("Teacher Index not found")
            }
            else{
                const teacher= teacherIndex.Teacher.find(
                    (teacherObj)=>{
                        console.log(teacherObj._id.toString(),"teacherObj");
                        console.log(teacherObj._id.toString()===teacherid.toString(),"output");
                        return teacherObj._id.toString()===teacherid.toString()
                    }
                );
                console.log(teacher,"teacher");
                if(!teacher){
                    return res.status(400).send("Couldn't find the teacher")
                }
                const updatedTeacherDetails={
                    FirstName:req.body.FirstName,
                    LastName:req.body.LastName,
                    Address:req.body.Address,
                    DateOfBirth:req.body.DateOfBirth,
                    Age:req.body.Age,
                    Gender:req.body.Gender,
                    BloodGroup:req.body.BloodGroup,
                    Qualification:req.body.Qualification,
                    Designation:req.body. Designation,
                    Subject:req.body.Subject,
                    Email:req.body.Email,
                    PhoneNumber:req.body.PhoneNumber
                };
                Object.assign(teacher,updatedTeacherDetails)
                await teacherIndex.save();
                res.send("Successfully Updated Teacher Details")
            }   
        }
        catch(err){
            console.log(err);
         res.status(400).json({err})       
        }
    },
    deleteTeacher: async (req, res) => {
        const id = req.params.id
        try {
            await TeacherSchema.findByIdAndDelete(id)
            res.status(200).json("successfully deleted")
        }
        catch (err) {
            res.status(400).json("deletion failed")
        }
    },
    deleteOneTeacher: async (req, res) => {
        // const instituteId = req.params.instituteid
        const indexid = req.params.indexid;
        const teacherid = req.params.teacherid;
        console.log("index", indexid)
        console.log("teacherid", teacherid)
        try {
            const deletedTchr = await TeacherSchema.findByIdAndUpdate(
                { _id: indexid },
                {
                    $pull: {
                        Teacher: { _id: teacherid },
                    },
                })
            res.status(200).json({ "message": "Successfully deleted student", deletedTchr })
            console.log(deletedTchr,"deleted msg log");
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ "message": "Failed top delete student", err, deletedTchr })

        }
    }
}