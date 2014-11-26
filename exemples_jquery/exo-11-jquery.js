/* EXO 1.1
Créez un formulaire comportant :
- Un champ TEXT ainsi qu'un LABEL "prenom".
- Une liste SELECT ayant pour options : "Mr", "Mme" et "Mlle".
- Un bouton "envoyer"
Sous le formulaire, créez un DIV vierge avec un ID.

=> Un clic sur le bouton affichera une phrase incluant "Bonjour", le genre et le prénom renseigné.
*/


$(document).ready(function() {
// ici mon code jquery..

  $('input[type=button]').on('click', function(){
		var prenom = $('#prenom').val();
		var genre =  $('#liste').val();
		$('div').html("Bonjour "+genre+" "+prenom);
    	//alert("Bonjour "+genre+"  "+prenom);
	});  
});