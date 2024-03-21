const StudSchema = require('../model/StudentSchema')
module.exports = {
    addStud: async (req, res) => {
        const { InstituteId, Student } = req.body;
        const id = req.params.id
        try {
            const result = await StudSchema.create({
                InstituteId,
                Student
            });
            console.log(result);
            const id = result._id
            res.status(200).json({ success: "success", 'Studentid': id });


            // ${Student.id}

        }
        catch (err) {
            res.status(400).json({ err })
        }
    },
    addStudent: async (req, res) => {
        const { student } = req.body;
        const { id } = req.params;
        console.log(id, req.body);
        
        const result1 = await StudSchema.findByIdAndUpdate(id, { $push: { Student: req.body } })
        if (result1) {
            console.log(result1);
            res.status(200).json({ result1 })
        }
        else {
            console.log("failed to push student details")
            res.status(400).json("failed to push student details")
        }

    },
    getStud: async (req, res) => {
        try {
            const result2 = await StudSchema.find()
            console.log(result2.data);
            res.status(200).json({ result2 })
        }
        catch (err) {
            res.status(400).json({ err })
        }
    },
    getStudByIdForOne: async (req, res) => {
        const id = req.params.id;
        try {
            const result2 = await StudSchema.findById(id)
            console.log(result2.data);
            res.status(200).json({ result2 })
        }
        catch (err) {
            res.status(400).json({ err })
        }
    },
    getStudById: async (req, res) => {
        const id = req.params.id;
        try {
            const result3 = await StudSchema.findById(id)
            res.status(200).json({ result3 })

        }
        catch (err) {
            res.status(400).json(err)
        }
    },
    updateStud: async (req, res) => {
        const id = req.params.id;
        try {
            await StudSchema.findByIdAndUpdate(id, {
                InstituteId: req.body.InstituteId,
                Student: req.body.Student
            })
            res.status(200).json("sucess")
        }
        catch (err) {
            res.status(400).json({ err: "update failed" })
        }
    },
    updateOneStudent:async(req,res)=>{
        const indexid=req.params.indexid;
        const studentid=req.params.studentid;
        console.log(indexid,"index id");
        console.log(studentid,"student id");
        try{
            const studentIndex=await StudSchema.findById(indexid)
            // console.log(teacherIndex,"teacher index");
            // console.log(teacherIndex.Teacher,"inside teacher index");
            if(!studentIndex){
                return res.status(400).send("Student Index not found")
            }
            else{
                const student= studentIndex.Student.find(
                    (studentObj)=>{
                        console.log(studentObj._id.toString(),"studentObj");
                        console.log(studentObj._id.toString()===studentid.toString(),"output");
                        return studentObj._id.toString()==studentid.toString()
                    }
                );
                console.log(student,"student");
                if(!student){
                    return res.status(400).send("Couldn't find the student")
                }
                const updatedStudentDetails={
                    Name:req.body.Name,
                    Course:req.body. Course,
                    DateOfBirth:req.body.DateOfBirth,
                    Email:req.body.Email,
                    Address:req.body.Address,
                    Gaurdian:req.body.Gaurdian,
                    PhoneNumber:req.body.PhoneNumber
                };
                Object.assign(student,updatedStudentDetails)
                await studentIndex.save();
                res.send("Successfully Updated Student Details")
            }   
        }
        catch(err){
            console.log(err);
         res.status(400).json({err})       
        }
    },
    deleteStud: async (req, res) => {
        const id = req.params.id;
        try {
            await StudSchema.findByIdAndDelete(id)
            res.status(200).json("deleted successfully")
        }
        catch (err) {
            res.status(400).json({ err })
        }
    },
    deleteStudOne: async (req, res) => {
        // const instituteId = req.params.instituteid
        const indexid = req.params.indexid;
        const studentid = req.params.studentid;
        console.log("index", indexid)
        console.log("studentid", studentid)
        try {
            const deletedSud = await StudSchema.findByIdAndUpdate(
                { _id: indexid },
                {
                    $pull: {
                        Student: { _id: studentid },
                    },
                })
            res.status(200).json({ "message": "Successfully deleted student", deletedSud })
            console.log(deletedSud,"deleted msg log");
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ "message": "Failed top delete student", err, deletedSud })

        }
    }
}