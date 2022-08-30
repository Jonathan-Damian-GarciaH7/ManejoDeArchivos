const fs = require('fs')


class Contenedor{

    constructor(name){
        this.name = name
    }

     async Save (informacion){
        let id

        try {
            let contenido = await fs.promises.readFile(`./${this.name}`,'utf-8')
            let contenidojson = JSON.parse(contenido)
            let ultimoIndice = contenidojson.length - 1
            let ultimoId = contenidojson[ultimoIndice].id
            informacion.id = ultimoId + 1
            let id = informacion.id
            contenidojson.push(informacion)
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(contenidojson)  )

           // console.log(ultimoIndice)
        } 
        catch (error) {
            console.log(error)
        }
        //return id
    }

    async GetbyId(id){

        try{

            let contenido = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            let contenidoJson = JSON.parse(contenido)
            let contenidoExtraidoDelArray
            contenidoJson.forEach(element => {
               if(element.id == id){
                contenidoExtraidoDelArray = element
               }
                
            });
            return contenidoExtraidoDelArray



            console.log(contenidoJson)
        }
        catch(error){

            console.log(error)

        }

    }

   async GetAll(){
        try{
            let contenido = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            let contenidoJson = JSON.parse(contenido) 
            return contenidoJson



        }
        catch(error){


        }
    }

    DeleteById(id){


    }

    DeleteAll(){

    }




}   

let contenedor = new Contenedor("productos.json")

let informacionNueva = {
    "id":4,
    "tittle": "goma",
    "price": 123.45
}

/*contenedor.Save(informacionNueva).then( respuestaDeLaPromesa => {
    console.log(respuestaDeLaPromesa)
} )*/

/*contenedor.GetbyId(3).then( result => {
    console.log(result)
} )*/

contenedor.GetAll().then ( result =>{
    console.log(result)
} )