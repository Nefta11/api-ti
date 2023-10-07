const express=require('express')
const app=express();

app.use(express.json());

app.get('/getAll',(req,res)=>{
res.json({status:"peticion recibida desde el equipo de Neftali"});
});

app.post('/inser',(req,res)=>{
console.log(req.body);
    res.json({status:"student saved"})
});

app.listen(3000,()=> {
    console.log('server listening on port 3000');
})