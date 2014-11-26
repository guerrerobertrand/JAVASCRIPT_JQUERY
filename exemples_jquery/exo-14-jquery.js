/* EXO 1.4
Nous allons maintenant créer une zone de texte de type "accordéon".
Pour cela, creez :
- Un titre H1 de votre choix.
- Une balise DIV contenant du texte en dessous
 (Y appliquer une bordure de 1px, noire)

=> Lorsque l'on cliquera sur le titre, une animation 
fera disparaitre progressivement le 
texte (opacite) et amènera sa hauteur à 0. 
Si l'on reclique sur le titre, c'est l'animation inverse qui s'exécutera.
*/


$(document).ready(function() {
// ici mon code jquery..

  $('h1').on('click', function(){
		//alert("Bonjour ");
		$('div').toggle(2000);
	});  
});