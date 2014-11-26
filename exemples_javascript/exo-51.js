/* EXO 5.1
Les méthodes getDay() et getMonth() de l'objet Date permettent
 d'obtenir respectivement le jour de la semaine 
 (de 0 à 6, 0 étant le dimanche) et le mois en cours 
 (de 0 à 11, 0 étant janvier).
Préparez 2 tableaux contenant le nom des jours
 et des mois et utilisez les pour afficher une 
 date lisible. (Utilisez également les méthodes 
 getDate() et getFullYear() afin d'afficher cette date finale)
*/

/* objet Date et méthodes associées */
//fonctions à l'intérieur des objets : s'appellent méthodes

var laDate = new Date();
// jour 4 = Jeudi
// num = 20
// mois 10 = Novembre
// an = 2014

//exemple de méthode getHours de l'objet laDate
//var lHeure = laDate.getHours();

var leJour = laDate.getDay();
var leMois = laDate.getMonth();
var leNum = laDate.getDate();
var laDateFull = laDate.getFullYear();


var tabJours = Array('Dimanche','Lundi','Mardi','Mercredi','Jeudi', 'Vendredi','Samedi');

var tabMois = Array('Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre');

window.document.getElementById("compteurA").innerHTML = "La date est : <br/>"+tabJours[leJour]+" "+leNum+" "+tabMois[leMois]+" "+laDateFull ;
