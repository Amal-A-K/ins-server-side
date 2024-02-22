const AttSchema = require('../Model/StdAttendanceSchema')

module.exports = {
    addAttendance: async (req, res) => {
        const { ScheduleId, StudentId, Status } = req.body;
        try {
            const result = await AttSchema.create({
                ScheduleId,
                StudentId,
                Status
            });
            res.status(200).json("attendance added successfully")
        }
        catch (err) {
            res.status(400).json("something wrong")
        }

    },
    getAttendance: async (req, res) => {
        try {
            const result2 = await AttSchema.find()
            res.status(200).json({ result2 })
        }
        catch (err) {
            res.status(400).json("error")
        }
    },
    getAttendanceById: async (req, res) => {
        const id = req.params.id;
        try {
            const result3 = await AttSchema.findById(id)
            res.status(200).json({ result3 })

        }
        catch (err) {
            res.status(400).json("couldn't get attendance")
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        try {
            await AttSchema.findByIdAndUpdate(id, {
                ScheduleId: req.body.ScheduleId,
                StudentId: req.body.StudentId,
                Status: req.body.Status

            })
            res.status(200).json("update successful")
        }
        catch (err) {
            res.status(400).json("couldn't update")
        }
    },
    delete: async (req, res) => {
        const id = req.params.id
        try {
            await AttSchema.findByIdAndDelete(id)
            res.status(200).json("deleted successfully")
        }
        catch (err) {
            res.status(400).json(err)
        }
    }
}