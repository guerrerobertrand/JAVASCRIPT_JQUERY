/* EXO 3.5
Créez une variable tableau contenant le nom de 6 couleurs différentes.
Dans la page HTML, créez autant de bouton numérotés de 1 à 6.
Un clic sur un bouton appelera une fonction qui récupèrera le nom de la couleur correspondante dans le tableau (attention au décalage des indices !) et l'affichera dans une pop-up de type alert().

Cerise sur le gâteau : chaque bouton sera de la couleur correspondante grâce à un peu de CSS.

*/
var tabCouleurs= Array("rouge","vert", "bleu", "orange", "jaune", "mauve");

function affiche(val){
 	var reponse = tabCouleurs[val];
    alert("Couleur : "+reponse);
 }
