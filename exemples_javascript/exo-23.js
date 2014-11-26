/* EXO 2.3
Reprenez l'exercice précédent et optimisez 
le afin qu'en cas de réponse négative on 
recommence le process depuis le début 
plutôt que d'afficher "Tant pis..."
*/

function affiche () {
//exemple de pascal bocquillon
	var prenom = prompt ("Entrez votre prénom ? ") ;
	var reponse = confirm("Votre prénom est : " + prenom) ;

	if(reponse) {
		alert("Bonjour " + prenom ) ;
	} else {
		alert("Tant pis….") ;
		affiche() ; // appel de la fonction à l’intérieur d’elle-même…
}
}
