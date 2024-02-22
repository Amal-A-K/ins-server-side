const TeacherSchema = require('../Model/TeacherSchema');
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
    deleteTeacher: async (req, res) => {
        const id = req.params.id
        try {
            await TeacherSchema.findByIdAndDelete(id)
            res.status(200).json("successfully deleted")
        }
        catch (err) {
            res.status(400).json("deletion failed")
        }
    }
}