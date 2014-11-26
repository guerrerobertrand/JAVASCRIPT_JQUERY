/* EXO 3.3
Reprenez l'exercice précédent et arrangez vous pour qu'un numéro sur 2 soit en gras. (Utilisez la balise <strong>)
*/

// structure while
function affiche(){
var i = Number(); 
i=1;
while (i<10) {
	window.document.write ("ligne : " + i + "<br />");
   	window.document.write("ligne : " + "<strong>" + (i+1) + "</strong>"+ "<br />");
      	i+=2;
	}
}  