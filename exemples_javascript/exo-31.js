/* EXO 3.1
Via une boite de dialogue, demandez à l'utilisateur de trouver le chiffre mystère.
S'il propose trop petit ou trop grand, il doit en être informé et le test recommencé jusqu'à ce qu'il trouve. Le chiffre mystère sera 7.
*/

function affiche(){

var nbr = 7;

var reponse = prompt("Veuillez saisir un nombre ?","votre nombre ici");
 
  if (reponse > nbr){
    alert("chiffre trop grand");
    affiche();
  } else if (reponse < nbr) {
      alert("chiffre trop petit");
    affiche();
  } else {
    alert("Gagné le chiffre mystère est : "+ nbr);
  }
}