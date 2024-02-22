const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subindex = new Schema({

    Student: {
        type: String,
        // required: false,
    },

    Teacher: {
        type: String,
        // required: false,
    }
})
const InstSchema = new Schema({
    InstitutionName: {
        type: String,
        required: true

    },
    Address: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },  

    //School or College
    // Category: {
    //     type: String,
    //     required: true,
    // },
    Index: [Subindex],

    State: {
        type: String,
        required: true,
    },
    District: {
        type: String,
        required: true,
    },
    CityOrTown: {
        type: String,
        required: true,
    },
    // CourseCategory: {
    //     type: String,
    //     required: true
    // },
    // CourseName: {
    //     type: String,
    //     required: true
    // },
    // CourseCode: {
    //     type: String,
    //     required: true
    // }
})
module.exports = mongoose.model("institution", InstSchema);