/* EXO 1.5
Créez une variante de l'exercice précédent, mais le texte 
doit être invisible dès le démarrage.
De plus le texte ne doit pas disparaitre complètement 
mais atteindre une transparence de 50% et
les animations se feront l'une après l'autre et non en même temps.
*/

$(document).ready(function() {
// ici mon code jquery..

  var hauteur = $('div').css("height");

  $('h1').on('click', function(){
		//alert("Bonjour Jquery ");

	//alert(hauteur);    
    if($('div').css("height") == "0px") {
      $('div').animate({height:"200px"}, 200);
      $('div').animate({opacity:"1"}, 1000);
    }
    else {
      $('div').animate({opacity:"0.5"}, 1000);
      $('div').animate({height:"0px"}, 200);
    }
  });  
});