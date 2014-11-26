/* EXO 5.2
Toujours grace à l'objet Date il est possible de récupérer l'heure, les minutes et les secondes courantes avec respectivement les méthodes getHours(), getMinutes() et getSeconds().
Utilisez la méthode setTimeout() en vous basant sur l'exemple du cours afin de réaliser une horloge fonctionnelle qui s'affichera sur la page.
*/
// objet Date et méthodes associées
//fonctions à l'intérieur des objets : s'appellent méthodes

//fonction horloge
function horloge(){

  //déclarations
var laDate = new Date();
var lHeure = laDate.getHours();
var laMinute = laDate.getMinutes();
var laSeconde = laDate.getSeconds();

//gérer l'affichage d'un seul chiffre
  if(laSeconde<10){
    laSeconde ="0"+laSeconde;
  }
  if(laMinute<10){
    laMinute="0"+laMinute;
  }
  if(lHeure<10){
    lHeure="0"+lHeure;
  }
  window.document.getElementById("compteurA").innerHTML = lHeure+" : "+laMinute+" : "+laSeconde ;
	
  	setTimeout("horloge()", 1000);
}

horloge();