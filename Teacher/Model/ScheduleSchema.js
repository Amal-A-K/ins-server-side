const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    Date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Subject: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("schedule", ScheduleSchema)