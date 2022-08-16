const express = require("express")
const fs = require ("fs")
const fsPromise = require ("fs/promises")

const app = express ()

// //Endpoint de bienvenida 
// app.get("/", (requesr, response) => {
//     response.write("Bienvenida a nuestra api de express")
//     response.end()
// })

app.listen(8080, () => {
    console.log("server is listening ...")
})

// // Leer archivo 
// /** 
//  * 1-> callbacks
//  * 2-> promises -> then/ catch
//  * 3-> async/await
 
// */

// //callback
// app.get("/files-callbacks", (request, response) => {
//     fs.readFile("text1.txt", "utf8", (err, data) => {
//         if(err) {
//             response.write("hubo un error")
//             response.end()
//         }
//         response.write(data)
//         response.end()
//     })
// })

// app.get("/files-promises", (request, response) => {
//     fsPromise.readFile("text1.txt", "utf8")
//     .then((data) => {
//         response.write(data)
//         response.end()
//     })
//     .catch((error) => {
//         response.write(error)
//         response.end()
//     })
// })

// Ejercicio
// Endpoint que lea text1.txt con async/await

// app.get("/file-async-await", async (request, response) => {
//     try {
//         const files = await fsPromise.readFile("text1.txt", "utf8")
//         response.write(files)
//         response.end()
//     }catch(error) {
//         response.write(error)
//         response.end()
//     }   
// })

//! EJERCICIO 2//
//Enpointskoders
// recurso -> koders 

app.get("/koders", async(reuest, response) => {
    const db = await fsPromise.readFile("koders.json", "utf8")
    const parsedDB = JSON.parse(db)
    console.log("koders", parsedDB.koders)
    response.json(parsedDB.koders)
})

/**
 * 1 - PATH PARAM -> identificadores -> modifican la ruta del lado de ack
 * /recurso/identificador -> /koders/:id
 * 
 * 2- QUERIM PARAM -> no cambian la ruta
 * ?modulo=
 */

// Recibir un koder en especifico con el id
app.get("/koders/:id",async  (request, response) => {

    //PAth params
    const { params } = request
 

    // DB 
    const db = await fsPromise.readFile("koders.json", "utf8")
    const parsedDB = JSON.parse(db)


    //Filtramos para encontrar al koder con identificador 2
    const foundKoder = parsedDB. koders.filter ((koder) => koder.id === Number(params.id))
   
    // Respondemos 
    
})

