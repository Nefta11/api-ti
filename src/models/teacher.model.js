const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    employeeNumber: {
        type: Number,
        required: true,
        unique: true
    },
    name:String,
    lastname:String,
    profession:String,
    area:String,
    salario:Number
},{
versionKey:false,
timestamps:true
});

module.exports = mongoose.model('Teacher', teacherSchema);

