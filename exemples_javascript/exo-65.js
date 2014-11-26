/* EXO 6.5
Ultime amélioration : nous allons créer une zone de reset pour notre petit carré.
Creéz un DIV avec la classe 'reset' :
- positionnement absolu
- 100% de largeur, 100px de hauteur.
- Ajoutez un z-index:-1 (afin de faire passer cette zone 'derrière' le carré.)
- bordure de 1px, grise et de type 'dashed'
Débrouillez-vous pour que désormais, lorsque nous cliquerons à l'intérieur de cette zone, notre petit carré glouton retrouve sa taille initiale.
 */
function bouge(event){
	objet = window.document.getElementById('victime1');
	var x = event.clientX;
	var y = event.clientY;
	//alert('Vous avez clique au point de coordonnes: ' + x + ', ' + y );
	
	var w = objet.offsetWidth;
	var h = objet.offsetHeight;
	
	// j'affecte les nouvelles positions : ça bouge
	objet.style.left=(x-(w/2))+"px";
	objet.style.top=(y-(h/2))+"px";
    //alert("Top : "+ t +" Left : "+l );
}

function init(){
	
	//var victime = window.document.getElementsById('victime1');
	//objet.style.position="absolute";
	
	objet.style.top="50px";
	objet.style.left="50px";  
	
	//on remet la taille initiale
	objet.style.width="50px";
	objet.style.height="50px";
	
	alert('click reset');
 }
 
 function augmente(objet){
	
	//on récupère les dimensions
 	var w = objet.offsetWidth;
	var h = objet.offsetHeight;
	
	//on saisit l'augmentation
	objet.style.width=(w+5)+"px";
	objet.style.height=(h+5)+"px";

 }
