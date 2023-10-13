const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    educationLevel: {
        type: String,
        required: true
    },
    employeeNumber: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Teacher', teacherSchema);
