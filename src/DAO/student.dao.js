const student=require('../models/student.model')
const studentDAO={}
studentDAO.getAll=async()=>{
    const students=student.find();
    return students;
}
module.exports=studentDAO;