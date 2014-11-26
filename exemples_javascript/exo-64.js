/* EXO 6.4
Ajoutons une petite fonctionnalité : un click de la souris entraine une augmentation de la taille de notre carré de 1px. Là encore, on se débrouillera pour qu'il soit bien centré par rapport à notre curseur de souris.
 */
function bouge(event){
	var objet = window.document.getElementById('victime1');
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

function init(objet){
	//var objet = window.document.getElementById('victime1');
	//objet.style.position="absolute";
	objet.style.top="50px";
	objet.style.left="50px";  
	
	//on remet la taille initiale
	objet.style.width="50px";
	objet.style.height="50px";
	
 }
 
 function augmente(objet){
	
	//on récupère les dimensions
 	var w = objet.offsetWidth;
	var h = objet.offsetHeight;
	
	//on saisit l'augmentation
	objet.style.width=(w+5)+"px";
	objet.style.height=(h+5)+"px";

 }
