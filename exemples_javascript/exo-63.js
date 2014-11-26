/* EXO 6.3
Gardons notre petit carré et appliquons encore un changement.
Nous allons modifier notre code de manière à ce que le carré suive gentiment le curseur de notre souris. On se débrouillera pour qu'il soit bien centré par rapport à cette dernière.
 */
function bouge(event){
	var objet = window.document.getElementById('victime1');
	
	var x = event.clientX;
	var y = event.clientY;
	//alert('Vous avez clique au point de coordonnes: ' + x + ', ' + y );
	
	var w = objet.offsetWidth;
	var h = objet.offsetHeight;
	
	// j'affecte les nouvelles positions : ca bouge
	objet.style.left=(x-(w/2))+"px";
	objet.style.top=(y-(h/2))+"px";
    //alert("Top : "+ t +" Left : "+l );
}

function init(objet){
	//var objet = window.document.getElementById('victime1');
	//objet.style.position="absolute";
	objet.style.top="50px";
	objet.style.left="50px";  
 }
