/*Fonction qui fait l'appel en JSON*/
    function loadJSON(callback) {   
        
        //On créé on objet javascript pour récupérer les données via une requête XMLHttp
        var xobj = new XMLHttpRequest();
            //On force le document à être traité comme un document de type JSON
            xobj.overrideMimeType("application/json");
            //On ouvre le fichier en GET
            xobj.open('GET', 'donnee.js'); 
            // Evenement appelé au changement de statut de notre objet
            xobj.onreadystatechange = function () {
                // Si la requête est finie, et la réponse est prête ==4 ET que c'est OK == 200 
            if (xobj.readyState == 4 && xobj.status == "200") {
                // On appelle la fonction callback qui reçoit en paramètre la réponse de notre objet. La fonction callback                    est placée en paramètre de la fonction loadJson 
                callback(xobj.responseText);
            }
    };
        //On n'envoie rien car c'est une méthode GET
        xobj.send(null);  
    }
    /* global $*/
    /*Fonction qui va afficher le contenu de notre fichier*/
    function init() {
        //On charge le contenu de notre réponse
        loadJSON(function(response) {
       
           console.log(response);
            //On crée un tableau vide
            var items = [];
            // Pour chaque élément du tableau
            $.each(JSON.parse(response), function(key, value) {
                //On l'ajoute dans nos td de la table html
                items.push( "<tr>" );                   
                    items.push( "<td class='Prénom'>" + value.Prénom + "</td>" );   
                    items.push( "<td class='Nom'>" + value.Nom + "</td>" ); 
                    items.push( "<td class='Age'>" + value.Age + "</td>" ); 
                items.push( "</tr>" );                                   
            });

                //Ajoute les table de classe table tab-json au div portant la classe recent-matiere
              $( "<table>", {
                "class": "table tab-json",
                html: items.join( "" )
              }).appendTo( ".testjson" );
        });
    }