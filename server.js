const express = require('express')

//crear el objeto principal
//de la api
const app = express()

//url de prueba
app.get('/prueba' , function(request , response ){
    response.send("Hola")
})

app.get('/prueba2' , (request , response ) =>{
    return response
        .status(200)
        .json({
            "sucess" : true
        })
})

//Rutas del recurso bootcamp
app.get('/api/v1/devcamp/bootcamps' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : "aqui va a mostrarse todos los bootcamps"
        })
})
//obtener el recurso bootcamp por id
app.get('/api/v1/devcamp/bootcamps/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `obteniendo bootcamp con id ${ request.params.id }`
        })
})
//crear el recurso bootcamp por id
app.post('/api/v1/devcamp/bootcamps' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : "aqui se van a crear un bootcamp"
        })
})

//actualizar el recurso bootcamp por id
app.put('/api/v1/devcamp/bootcamps/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Se ha actualizado el bootcamp con id: ${ request.params.id } exitosamente`
        })
})
//eliminar el recurso bootcamp por id
app.delete('/api/v1/devcamp/bootcamps/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Se ha eliminado el bootcamp con id: ${ request.params.id } exitosamente`
        })
})






//Rutas del recurso Users
app.get('/api/v1/devcamp/users' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : "aqui va a mostrarse todos los users"
        })
})
//obtener el recurso Users por id
app.get('/api/v1/devcamp/users/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `obteniendo users con id ${ request.params.id }`
        })
})
//crear el recurso Users por id
app.post('/api/v1/devcamp/users' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : "aqui se van a crear los users"
        })
})

//actualizar el recurso Users por id
app.put('/api/v1/devcamp/users/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Se ha actualizado el user con id: ${ request.params.id } exitosamente`
        })
})
//eliminar el recurso Users por id
app.delete('/api/v1/devcamp/users/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Se ha eliminado el user con id: ${ request.params.id } exitosamente`
        })
})






//Rutas de los cours
app.get('/api/v1/devcamp/cours' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : "aqui va a mostrarse todos los cours"
        })
})
//obtener el recurso de los  cours por id
app.get('/api/v1/devcamp/cours/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `obteniendo los cours con id ${ request.params.id }`
        })
})
//crear el recurso de los cours por id
app.post('/api/v1/devcamp/cours' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : "aqui se van a crear los cours"
        })
})

//actualizar el recurso de los cours por id
app.put('/api/v1/devcamp/cours/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Se ha actualizado el cour con id: ${ request.params.id } exitosamente`
        })
})
//eliminar el recurso de los cours por id
app.delete('/api/v1/devcamp/cours/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Se ha eliminado el cour con id: ${ request.params.id } exitosamente`
        })
})







//Rutas de los reviews
app.get('/api/v1/devcamp/reviews' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : "aqui va a mostrarse todos los reviews"
        })
})
//obtener el recurso de los  reviews por id
app.get('/api/v1/devcamp/reviews/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `obteniendo los reviews con id ${ request.params.id }`
        })
})
//crear el recurso de los reviews por id
app.post('/api/v1/devcamp/reviews' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : "aqui se van a crear los reviews"
        })
})

//actualizar el recurso de los reviews por id
app.put('/api/v1/devcamp/reviews/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Se ha actualizado los reviews con id: ${ request.params.id } exitosamente`
        })
})
//eliminar el recurso de los reviews por id
app.delete('/api/v1/devcamp/reviews/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Se ha eliminado el review con id: ${ request.params.id } exitosamente`
        })
})




//crear el servidor de aplicaicones 
app.listen(5000 , 
    console.log('servidor ejecutando en puerto ' + 5000))
