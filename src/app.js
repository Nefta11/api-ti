/*app.get('/getAll',(req,res)=>{
res.json({status:"peticion recibida desde el equipo de Neftali"});
});

app.post('/inser',(req,res)=>{
console.log(req.body);
// Aquí van las instrucciones para insertar el body a  
//usando mongoose
    res.json({status:"student saved"})
}); 
app.get('/getAll',(req,res)=>{
res.json({status:"peticion recibida desde el equipo de Neftali"});
});

app.post('/inser',(req,res)=>{
console.log(req.body);
// Aquí van las instrucciones para insertar el body a  
//usando mongoose
    res.json({status:"student saved"})
});
*/



const { urlencoded } = require('body-parser');
const express=require('express')
const morgan=require('morgan');
const studentRouter=require('./routes/student.router')
const app=express();
//Settings
//indica el puerto 
app.set('PORT',process.env.PORT || 3000);
app.set('view engine','ejs');//iniciamos el motor de plantillas que sera usado para responder html




//Middlewares
app.use(express.json());
app.use(urlencoded({extended:false}));
app.use(studentRouter);

//TAREA CREAR TEACHER.MODEL OSEA TODO PERO AHI MISMO

module.exports=app;
