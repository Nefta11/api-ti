const teacherDAO = require('../DAO/teacher.dao'); 

const teacherController = {};

teacherController.getAll = async (req, res) => {
    teacherDAO.getAll()
        .then(teachers => {
            res.render('../src/views/indexTeacher',{teachers});
        })
        .catch(err => res.json({
            status: "request failed",message:err
        }));
};

teacherController.getOne = async (req, res) => {
    teacherDAO.getOne(req.params.employeeNumber)
        .then(teacher => {
            if (teacher != null) {
                res.render('../src/views/editTeachers',{teacher});
            } else {
                res.json({
                    status: "Teacher not found"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Request failed",message:err
            });
        });
};

teacherController.insertOne = async (req, res) => {
    teacherDAO.insertOne(req.body)
        .then(result => {
            res.redirect('/api/teachers/getAll');
        })
        .catch(err => {
            res.json({
                status: "request failed",message:err
            });
        });
};

teacherController.updateOne = async (req, res) => {
    teacherDAO.updateOne(req.params.employeeNumber, req.body)
        .then(result => {
            res.redirect('/api/teachers/getAll');
        })
        .catch(err => {
            res.json({
                status: "request failed",message:err
            });
        });
};

teacherController.deleteOne = async (req, res) => {
    teacherDAO.deleteOne(req.params.employeeNumber)
        .then(result => {
            res.redirect('/api/teachers/getAll');
        })
        .catch(err => {
            res.json({
                status: "request failed",message:err
            });
        });
};

module.exports = teacherController;
