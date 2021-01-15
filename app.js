const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT || 3000;


//el sugundo public dice como se llama la carpeta
//el primer public quiere decir como lo vas a encontrar
app.use('/',express.static(path.join(__dirname,'/public')));


app.listen(port, ()=>{
 console.log("Servidor escuchado en el puerto " +port);
})