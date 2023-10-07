const studentController=require('../controllers/student.controller')
const {Router}=require('express');
const router=Router();

router.get('/getAll',studentController.getAll);
module.exports=router;

