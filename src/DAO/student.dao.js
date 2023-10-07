const student=require('../models/student.model')
const studentDAO={}
studentDAO.getAll=async()=>{
    const students=student.find();
    return students;
}
studentDAO.getOne=async(dni)=>{
const student=student.findOne({dni:dni})
return student;
}
module.exports=studentDAO;