const express = require('express')

//crear el objeto principal
//de la api
const app = express()

//url de prueba
app.get('/prueba' , function(request , response ){
    response.send("Hola")
})

app.get('/prueba2' , (request , response ) =>{
    response
        .status(200)
        .json({
            "sucess" : true
        })
})


//crear e lservidor de la aplicacion
app.listen( 5000 ,
     console.log('servidor ejecutando en el puerto' + 5000  ))
