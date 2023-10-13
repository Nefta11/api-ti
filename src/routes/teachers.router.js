const teacherController = require('../controllers/teacher.controller');  
const { Router } = require('express');
const router = Router();

router.get('/getAll', teacherController.getAll);
router.get('/getOne/:employeeNumber', teacherController.getOne);
router.post('/insertOne', teacherController.insertOne);
router.post('/updateOne/:employeeNumber', teacherController.updateOne);
router.get('/deleteOne/:employeeNumber', teacherController.deleteOne);

module.exports = router;
