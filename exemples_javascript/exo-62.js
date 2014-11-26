/* EXO 6.2
Reprenez l'exercice précédent et donnez au BODY une largeur et une hauteur de 100%.
Nous allons faire une petite variante : Désormais le carré se déplace avec un pas de 1px seulement et lorsque la souris bouge, non plus lorsqu'on le survole.
Faites 2 versions :
- Le déplacement s'effectue uniquement quand la souris bouge dans le carré.
  <div id="victime1"  onmousemove="bouge(this);" onClick="init(this);">
   </div>
- Le déplacement s'effectue quel que soit l'endroit où nous bougeons la souris.
<body onmousemove="bouge();">
  <div id="victime1" onClick="init(this);">
   </div>
</body>
 */
function bouge(){
	var objet = window.document.getElementById('victime1');
	posX = objet.offsetLeft;
	posX += 5;
	objet.style.left=posX+"px";
    //alert("Top : "+ t +" Left : "+l );
}

function init(objet){
	//var objet = window.document.getElementById('victime1');
	//objet.style.position="absolute";
	objet.style.top="50px";
	objet.style.left="50px";  
 }
