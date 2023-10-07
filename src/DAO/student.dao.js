const Student = require('../models/student.model')

const studentDAO = {}
studentDAO.getAll = async () => { //Traemos lo que encontramos
    const students = await Student.find() //Buscamos
    return students; //Traemos todos los que hicieron match
}

studentDAO.getOne = async (dni) => {
    const student = await Student.findOne({ dni: dni }); //Solo traemos uno
    return student;
}

studentDAO.insertOne=async(student)=>{
    const studentSaved= new Student(student);
    await studentSaved.save();
    return "student saved";
}

studentDAO.updateOne=async(dni,student)=>{
    const result = await Student.updateOne({dni:dni},student);
    console.log(result)
    return "student update";
}

studentDAO.deleteOne=async(dni)=>{
    await Student.deleteOne({dni:dni});
    return "student delete";
}

module.exports=studentDAO;
