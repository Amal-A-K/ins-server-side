const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherDetails = new Schema({
    FirstName: {
        type: String,
        // required: false,
    },
    LastName: {
        type: String,
        // required: false,
    },
    Address: {
        type: String,
        // required: false,
    },
    DateOfBirth: {
        type: String,
        // required: false,
    },
    Age: {
        type: Number,
        // required: false,
    },
    Gender: {
        type: String,
        // required: false,
    },
    BloodGroup: {
        type: String,
        // required: false

    },
    Qualification: {
        type: String,
        // required: false,
    },
    Designation: {
        type: String,
        // required: false,
    },
    Subject: {
        type: String,
        // required: false,
    },
    Email: {
        type: String,
        // required: false,
    },
    PhoneNumber: {
        type: String,
        // required: false,
    }


})

const TeacherSchema = new Schema({
    InstitutionId: {
        type: String,
        // required: false,
    },

    Teacher: [TeacherDetails]
})
module.exports = mongoose.model('teacher', TeacherSchema)