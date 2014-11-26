/* EXO 1.3
Créez un formulaire contenant un bouton "Calculer".
Un clic sur celui-ci appele une fonction et lui passe 
en paramètre le chiffre de votre choix. La fonction aura pour 
mission de calculer le carré de ce chiffre et d'afficher le résultat 
dans une pop-up de type alert().
*/

function affiche(nbr){
	var result = nbr*nbr;
  alert("le carré de "+ nbr + " est : "+result);
}
