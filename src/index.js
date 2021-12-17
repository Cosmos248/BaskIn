import "./scss/main.scss";
 const axios = require("axios")



function getChaussures (){
axios.get("http://localhost/WP_Baskin/wp-json/wp/v2/chaussures")
 .then(function(reponse){
     console.log(reponse)
     let chaussures = reponse.data
     chaussures.forEach(function(chaussure){
         
        console.log(chaussure)
        console.log("L'id est : " , chaussure.id)
        console.log("La date est :" , chaussure.date)
        console.log("Le titre est :" , chaussure.title.rendered)

        let mamarque = chaussure.maqrues
        let couleurLacet = chaussure.acf.lacet

        mamarque.forEach(function(marque){
            console.log("L'ID marque est :" , marque)
        })

        couleurLacet.forEach(function(couleur){

            console.log("la couleur est : " , couleur["lacet-couleur"] )
        })

     })     
 }) 
 .catch(function(error){
     console.log("il y a une erreur !")
     console.log(error)
 })
}

getChaussures()

 
/*id date marque titre*/ 

/* note => (si .lacet-couleur ça ne marche pas ) => do => ["lacet-couleur"]*/