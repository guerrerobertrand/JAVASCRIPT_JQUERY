/* EXO 6.1
Créez un petit carré avec un DIV qui aura ces caractéristiques :
- positionnement absolu
- 50px de coté
- 50px de distance par rapport aux bord gauche et haut. ('left' et 'top')
Ecrivez 2 fonctions :
- bouge() qui aura pour but de déplacer le carré de 25px vers la droite lorsqu'on survol celui-ci
- init() qui replacera notre carré à sa position de départ lorsqu'on cliquera dessus.
*/
function bouge(objet){

	var t = objet.offsetTop;
	var l = objet.offsetLeft;
	var shift = 25;
  objet.style.left=l+shift+"px";
      //alert("Top : "+ t +" Left : "+l );
}

function init(objet){
	objet.style.position="absolute";
	objet.style.top="50px";
	objet.style.left="50px";  
 }