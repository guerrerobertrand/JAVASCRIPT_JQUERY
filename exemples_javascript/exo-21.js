/* EXO 2.1
Reprenez l'exercice 1.3.
Modifiez le afin que désormais 
le clic sur le bouton fasse apparaitre une boite 
de dialogue demandant le chiffre dont on souhaite 
obtenir le carré. Le résultat sera 
affiché dans une pop-up de type alert().
*/
function affiche(){
var nbr =  prompt("veuillez saisir un nombre ?","mettre votre nombre ici");
var result = nbr*nbr;
 window.alert("le carré de "+ nbr + " est :" + result);
}
