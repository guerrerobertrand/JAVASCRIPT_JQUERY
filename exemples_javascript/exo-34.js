/* EXO 3.4
A l'aide de boucles de type while, faites afficher 10 lignes contenant chacune 10 numéros.
La ligne 1 contiendra les numéros de 0 à 9, la ligne 2 de 10 à 19, etc...
L'ensemble doit être lisible.
*/

// structure 2 boucles while
function affiche(){

var compt1=0;
var compt2=0 ;

while(compt2<=9){
  while(compt1<=9){
    if(compt2==0){
    	window.document.write('0');  
    }
      window.document.write(((compt2*10)+compt1)+ " | ") ;
      compt1++;
  }
	window.document.write("<br/>");
	compt1=0;
  compt2++;
}

}  