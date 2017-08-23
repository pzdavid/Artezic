var profil = '{"profil":[' +
'{"Prénom":"Sarah" , "Nom":"J" , "Age" : "27 ans" },' +
'{"Prénom":"Camille" , "Nom":"S" , "Age" : "45 ans" },' +
'{"Prénom":"Arthur" , "Nom":"P" , "Age" : "25 ans" },'+
'{ "Prénom":"Eugène" , "Nom":"R" , "Age" : "28 ans" },'+
'{ "Prénom":"Mathilde" , "Nom":"F" , "Age" : "60 ans" },'+
'{ "Prénom":"Justine" , "Nom":"L" , "Age" : "38 ans" },'+
'{"Prénom":"Loïs" , "Nom":"J" , "Age" : "22 ans" },'+
'{ "Prénom":"Eric" , "Nom":"H" , "Age" : "30 ans" }]}';

var instrument= '{"instrument":['+
'{"Type":"Guitare"},'+
'{"Type":"Batterie"},'+
'{"Type":"Basse"},'+
'{"Type":"Contrebasse"},'+
'{"Type":"Violon"},'+
'{"Type":"Piano"},'+
'{"Type":"Trompette"},'+
'{"Type":"Saxophone"},'+
'{"Type":"Harpe"},'+
'{"Type":"Ukulélé"},'+
'{"Type":"Chant"},'+
'{"Type":"Harmonica"},'+
'{"Type":"Accordéon"},'+
'{"Type":"Banjo"}]}';

var  musique='{"musique":['+
'{"theme":"Ambiance"},'+
'{"theme":"Animaux"},'+
'{"theme":"Amitié"},'+
'{"theme":"Amour"},'+
'{"theme":"Bachata"},'+
'{"theme":"Blues"},'+
'{"theme":"Bonheur"},'+
'{"theme":"Classique"},'+
'{"theme":"Comédie"},'+
'{"theme":"Dance"},'+
'{"theme":"Disco"},'+
'{"theme":"Electro"},'+
'{"theme":"Enfant"},'+
'{"theme":"Fado"},'+
'{"theme":"Folk"},'+
'{"theme":"Funk"},'+
'{"theme":"Hip-Hop"},'+
'{"theme":"Humour"},'+
'{"theme":"Indie Pop"},'+
'{"theme":"Jazz"},'+
'{"theme":"Latina"},'+
'{"theme":"Liberté"},'+
'{"theme":"Lounge"},'+
'{"theme":"New Wave"},'+
'{"theme":"Rap"},'+
'{"theme":"Reprise"},'+
'{"theme":"Reggae"},'+
'{"theme":"Rock"},'+
'{"theme":"Rumba"},'+
'{"theme":"Siam"},'+
'{"theme":"Soul"}]}';

var  date='{"date":['+
'{"dateCrea":"23 Juin 2016", "dateFin":"23 Janvier 2017", "duree":"7 Mois" },'+
'{"dateCrea":"9 Septembre 2015", "dateFin":"9 Avril 2016", "duree":"6 Mois" },'+
'{"dateCrea":"12 Mars 2016", "dateFin":"12 Décembre 2016", "duree":"9 Mois" },'+
'{"dateCrea":"29 Septembre 2016", "dateFin":"29 Décembre 2016", "duree":"3 Mois" },'+
'{"dateCrea":"17 Avril 2016", "dateFin":"17 Septembre 2016", "duree":"5 Mois" },'+
'{"dateCrea":"8 Février 2016", "dateFin":"8 Avril 2016", "duree":"2 Mois" },'+
'{"dateCrea":"11 Novembre 2015", "dateFin":"11 Décembre 2015", "duree":"1 Mois" },'+
'{"dateCrea":"16 Octobre 2016", "dateFin":"16 Janvier 2017", "duree":"3 Mois" },'+
'{"dateCrea":"18 Février 2015", "dateFin":"18 Mars 2016", "duree":"13 Mois" },'+
'{"dateCrea":"29 Avril 2016", "dateFin":"29 Juin 2016", "duree":"2 Mois" },'+
'{"dateCrea":"14 Mai 2015", "dateFin":"14 Aout 2015", "duree":"3 Mois" },'+
'{"dateCrea":"20 Mai 2016", "dateFin":"20 Novembre 2016", "duree":"6 Mois" },'+
'{"dateCrea":"2 Janvier 2016", "dateFin":"2 Mars 2016", "duree":"2 Mois" },'+
'{"dateCrea":"12 Octobre 2016", "dateFin":"12 Janvier 2017", "duree":"3 Mois" },'+
'{"dateCrea":"1 Avril 2015", "dateFin":"1 Avril 2016", "duree":"12Mois" },'+
'{"dateCrea":"22 Décembre 2015", "dateFin":"22 Mai 2016", "duree":"5 Mois" },'+
'{"dateCrea":"16 Mars 2016", "dateFin":"16 Février 2017", "duree":"11 Mois" },'+
'{"dateCrea":"23 Juin 2016", "dateFin":"23 Aout 2016", "duree":"2 Mois" },'+
'{"dateCrea":"25 Novembre 2015", "dateFin":"25 Juin 2016", "duree":"7 Mois" },'+
'{"dateCrea":"12 Janvier 2015", "dateFin":"12 Mars 2017", "duree":"14 Mois" },'+
'{"dateCrea":"4 Septembre 2015", "dateFin":"4 Décembre 2016", "duree":"3 Mois" },'+
'{"dateCrea":"27 Aout 2015", "dateFin":"27 Avril 2016", "duree":"7 Mois" },'+
'{"dateCrea":"18 Mars 2016", "dateFin":"18 Mai 2016", "duree":"2 Mois" },'+
'{"dateCrea":"15 Juillet 2015", "dateFin":"15 Mai 2016", "duree":"10 Mois" },'+
'{"dateCrea":"5 Mai 2016", "dateFin":"5 Septembre 2016", "duree":"4 Mois"}]}';

var  morceaux='{"morceaux":['+
'{"titre":"Go Back Home"},'+
'{"titre":"Sunset Lover"},'+
'{"titre":"La Ballade du Cheval"},'+
'{"titre":"Dont Let Go"},'+
'{"titre":"Be Mine"},'+
'{"titre":"No Sleep"},'+
'{"titre":"I Can Talk"},'+
'{"titre":"Radioactive"},'+
'{"titre":"Crazy For You"},'+
'{"titre":"Black Sheep"},'+
'{"titre":"Mozart Song"},'+
'{"titre":"Some Nights"},'+
'{"titre":"White Tiger"},'+
'{"titre":"Odyssée"},'+
'{"titre":"La Cabane"},'+
'{"titre":"Beautiful Trash"},'+
'{"titre":"Summertime"},'+
'{"titre":"Dynamite"},'+
'{"titre":"Royals"},'+
'{"titre":"Say My Name"},'+
'{"titre":"The Greatest"},'+
'{"titre":"Come"},'+
'{"titre":"Intoxicated"},'+
'{"titre":"Outside"},'+
'{"titre":"Mon Autre Côté"}]}';

var  chanson='{"chanson":['+
'{"description":"Un titre inspiré d un voyage en Indonésie, sur une petite île, où les habitants y cultivent des algues..."},'+
'{"description":"Je me suis lancé pour ma toute première fois, en tant qu amateur. Merci à tout ceux qui ont participé à la composition de ce morceau et qui lui ont permis de voir le jour. Toutes critiques sont les bienvenues elles me permettrons de corriger et de soigner ma petite composition."},'+
'{"description":"Une composition musicale dans un style qui mélange rock et musique électronique."},'+
'{"description":"Cette musique est un hommage à Miles Davis."},'+
'{"description":"Commence sans introduction et avec puissance. Tout de suite après, les premiers violons jouent plusieurs enchaînements chromatiques de doubles-croches."},'+
'{"description":"Alternance tremblante du sol dièse et du la en croches, interprétée par la basse continue, les violons dans le registre grave et la basse à l unisson."},'+
'{"description":"Une mélodie descendante faite de notes prolongées."},'+
'{"description":"La séquence n a que 22 mesures, mais est dans cette courte période riche en variations : écriture homophonique et passages choraux en contrepoint alternent plusieurs fois et débouchent en fin sur une cadence du chœur quasi non-accompagnée, qui pour sa part finit sur un accord sans tierce en ré mineur."},'+
'{"description":"Ce morceau a été écrit pour la bande original d un court métrage expérimental."},'+
'{"description":"Chanson qui s inspire de la vie de Vincent Van Gogh. Mélange de sonorité faisant écho au naturalisme, impressionnisme, fauvisme et expressionnisme."},'+
'{"description":"Voici mon premier morceau en collaboration, merci à tout ceux qui ont pu rendre cela possible."},'+
'{"description":"Depuis quelques temps j étais à la recherche de nouvelles sonorités et association de styles. Voici le fruit de notre travail."},'+
'{"description":"Une chanson écrite pour une pièce de théâtre."},'+
'{"description":"Alice est une mignonne petite fille. Un jour, alors que sa soeur lui lit un livre, elle aperçoit un lapin blanc qui court comme si il était en retard. Intriguée, Alice le suit et pénètre dans son terrier."}]}';


var  commentaire='{"commentaire":['+
'{"avis":"Ce morceau est très beau. Je me suis laissée bercer par la mélodie."},'+
'{"avis":"Il aurait peut-être fallut développer d avantage de séquences avec un tempo rapide entrecoupés de séquences lentes."},'+
'{"avis":"Musique très bien arrangé."},'+
'{"avis":"On retrouve la sensiblité du morceau original mais avec une puissance apporté par les instruments choisis."},'+
'{"avis":"Vraiment inspirant !"},'+
'{"avis":"Très beau morceau, très bien écrit, qui mériterait de durée deux ou trois minutes de plus."},'+
'{"avis":"Peut-être que l arrivé plus tardive de la basse donnerai encore plus de puissance à ce morceau."},'+
'{"avis":"Bravo pour ce solo plus de violon si envoutant."},'+
'{"avis":"Belle énergie et harmonie entre les styles différents."},'+
'{"avis":"Un morceau qui ne manque de rien."}]}';

var  conversation1='{"conversation1":['+
'{"message":"Salut, j ai ajouté un solo de violion à la composition."},'+
'{"message":"Peux-tu le jouer plus piano ?"},'+
'{"message":"Je peux essayer mais il faudrait ajouter un élément pour donner de la puissance."}]}';

var  conversation2='{"conversation2":['+
'{"message":"Le morceau ne devrait pas comporter plus de 4 instruments différents."},'+
'{"message":"La basse est nécessaire !"},'+
'{"message":"Et le saxophone est le pilier de la chanson."},'+
'{"message":"Je réfléchis à un arrangement pour ces deux instruments."}]}';

var  conversation3='{"conversation3":['+
'{"message":"Je ne pense pas que l ajout de la guitare n est pas approprié."},'+
'{"message":"Elle devrait arrivé beaucoup plus tard dans le morceau."},'+
'{"message":"Je vais retravaillé le rif de début."},'+
'{"message":"Oui il faudrait que sont entrée dans le morceau soit plus fluide."}]}';

function load(){
var obj;
obj =JSON.parse(profil);
document.getElementById("block-pres-nom").innerHTML = obj.profil[0].Prénom + " "+ obj.profil[0].Nom+".";

}

