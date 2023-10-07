const studentDAO=require('../DAO/student.dao');
const studentController={}

studentController.getAll=async(req,res)=>{
    studentDAO.getAll()
    .then(students=>{
        res.json(students);
    })
    .catch(err=>{
        res.json({
            status:"request failed"
        })
    });
}

studentController.getOne=async(req,res)=>{
studentDAO.getOne(req.params.dni)
.then()
.catch();
}

module.exports=studentController;