const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    Name: {
        type: String,
        // required: true
    },
    Course: {
        type: String,
        // required: true
    },
    DateOfBirth: {
        type: String,
        // required: true
    },
    Email: {
        type: String,
        // required: true
    },
    Address: {
        type: String,
        // required: true
    },
    Gaurdian: {
        type: String,
        // required: true
    },
    PhoneNumber: {
        type: Number,
        // required: true,
    },


});
const StudSchema = new Schema({
    InstituteId: {
        type: String,
        // required:true,

    },
    Student: [StudentSchema]

});
module.exports = mongoose.model('student', StudSchema);