const SchedSchema = require('../Model/ScheduleSchema');
module.exports = {
    addSchedule: async (req, res) => {
        const { Date, Time, Subject } = req.body;
        try {
            const result = await SchedSchema.create({
                Date,
                Time,
                Subject
            });
            res.status(200).json("Success");
        }
        catch (err) {
            res.status(400).json("Failed to add schedule")
            console.log(err);
        }

    },

    getSchedule: async (req, res) => {
        try {
            const result2 = await SchedSchema.find();
            res.status(200).json({ result2 })
        }
        catch (err) {
            res.status(400).json("couldn't find Schedule")
        }
    },
    getScheduleById: async (req, res) => {
        const id = req.params.id
        try {
            const result3 = await SchedSchema.findById(id)
            res.status(400).json({ result3 })
        }
        catch (err) {
            res.status(400).json("Failed to find Schedule")
        }
    },
    update: async (req, res) => {
        const id = req.params.id

        try {
            await SchedSchema.findByIdAndUpdate(id, {
                Date: req.body.Date,
                Time: req.body.Time,
                Subject: req.body.Subject
            })
            res.status(200).json("Updated")
        }
        catch (err) {
            res.status(400).json("updation failed")
        }
    },
    deleteSchedule: async (req, res) => {
        const id = req.params.id
        try {
            await SchedSchema.findByIdAndDelete(id)
            res.status(200).json("deleted successfully")
        }
        catch (err) {
            res.status(400).json("failed to delete")
        }
    }
}