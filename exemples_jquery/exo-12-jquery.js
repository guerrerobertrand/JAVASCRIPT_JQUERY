/* EXO 1.2
Créez une liste UL comportant de nombreux LI de votre choix.
Inventez 2 classes CSS pour agrémenter la décoration des LI. (2 couleurs de fond différentes par exemple)

Ajoutez 2 boutons sous cette liste :
- Un avec pour valeur "OPTION 1", qui appliquera la première classe CSS aux éléments pair de la liste.
- L'autre avec valeur "OPTION 2", qui appliquera la seconde classe CSS a ces mêmes éléments.
*/

$(document).ready(function() {
// ici mon code jquery..

  $('#radio1').on('click', function(){
					$("li:odd").removeClass("jaune");
					$("li:odd").removeClass("reset");
					$("li:odd").addClass("vert");
	});  
  $('#radio2').on('click', function(){
					$("li:odd").removeClass("vert");
					$("li:odd").removeClass("reset");
					$("li:odd").addClass("jaune");
	});  
  $('#reset').on('click', function(){
					$("li:odd").removeClass("vert");
					$("li:odd").removeClass("jaune");
					$("li:odd").addClass("reset");
	});  
});