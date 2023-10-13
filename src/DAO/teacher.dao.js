const Teacher = require('../models/teacher.model');

const teacherDAO = {};

teacherDAO.getAll = async () => {
    const teachers = await Teacher.find();
    return teachers;
}

teacherDAO.getOne = async (employeeNumber) => {
    const teacher = await Teacher.findOne({ employeeNumber: employeeNumber });
    return teacher;
}

teacherDAO.insertOne = async (teacher) => {
    const teacherSaved = new Teacher(teacher);
    await teacherSaved.save();
    return "teacher saved";
}

teacherDAO.updateOne = async (employeeNumber, teacher) => {
    const result = await Teacher.updateOne({ employeeNumber: employeeNumber }, teacher);
    console.log(result);
    return "teacher updated";
}

teacherDAO.deleteOne = async (employeeNumber) => {
    await Teacher.deleteOne({ employeeNumber: employeeNumber });
    return "teacher deleted";
}

module.exports = teacherDAO;
