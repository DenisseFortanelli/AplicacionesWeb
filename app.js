const express=require('express');
const path=require('path');
const app=express();

console.log(__dirname);

//el sugundo public dice como se llama la carpeta
//el primer public quiere decir como lo vas a encontrar
app.use('/',express.static(path.join(__dirname,'/public')));


app.listen(3000, ()=>{
 console.log("Servidor escuchado en el puerto 3000");
} );