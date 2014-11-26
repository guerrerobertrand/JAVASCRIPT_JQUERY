/* EXO 2.2
Créez un script qui va demander dans 
un premier temps son prénom à l'utilisateur 
via une boite de dialogue adaptée, puis affichera 
une boite de confirmation avec comme question 
"Votre prénom est bien " suivi du prénom rentré 
préalablement par l'utilisateur. Si ce dernier confirme, 
on affiche une pop-up avec le message "Bonjour " suivi 
du prénom sinon on affiche, toujours dans une pop-up, "Tant pis..."
*/

function affiche(){
//on récupère la réponse à la question
var nom =  prompt("veuillez saisir votre nom ?","mettre votre nom ici");
//on confirme
var reponse = confirm("votre nom est bien : "+nom+ " ?");

//traitement de la réponse
  if(reponse){
      alert("Bonjour " + nom );
  }	else{
   alert("Tant pis...");
  }
}
