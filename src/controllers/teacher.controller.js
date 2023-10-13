const teacherDAO = require('../DAO/teacher.dao'); 

const teacherController = {};

teacherController.getAll = async (req, res) => {
    teacherDAO.getAll()
        .then(teachers => {
            res.json(teachers);
        })
        .catch(err => res.json({
            status: "request failed"
        }));
};

teacherController.getOne = async (req, res) => {
    teacherDAO.getOne(req.params.employeeNumber)
        .then(teacher => {
            if (teacher != null) {
                res.json(teacher);
            } else {
                res.json({
                    status: "Teacher not found"
                });
            }
        })
        .catch(err => {
            res.json({
                status: "Request failed"
            });
        });
};

teacherController.insertOne = async (req, res) => {
    teacherDAO.insertOne(req.body)
        .then(result => {
            res.json({
                status: result
            });
        })
        .catch(err => {
            res.json({
                status: "request failed"
            });
        });
};

teacherController.updateOne = async (req, res) => {
    teacherDAO.updateOne(req.params.employeeNumber, req.body)
        .then(result => {
            res.json({
                status: result
            });
        })
        .catch(err => {
            res.json({
                status: "request failed"
            });
        });
};

teacherController.deleteOne = async (req, res) => {
    teacherDAO.deleteOne(req.params.employeeNumber)
        .then(result => {
            res.json({
                status: result
            });
        })
        .catch(err => {
            res.json({
                status: "request failed"
            });
        });
};

module.exports = teacherController;
