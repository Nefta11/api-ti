const express=require('express')

const app=express();

app.get('/insert',(req,res)=>{
res.json({status:"peticion recibida desde el equipo de Neftali"});
});

app.listen(3000,()=> {
    console.log('server listening on port 3000');
})