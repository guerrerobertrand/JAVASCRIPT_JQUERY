/* EXO 1.3
Nous allons créer un éditeur HTML en ligne !
Pour cela, créez les éléments suivants :
- Un TEXTAREA avec un ID.
- Un bouton "Tranformer".
- Une balise DIV vierge avec un ID.

=> Lorsque l'utilisateur rentrera du code HTML 
dans la zone de texte, un clic sur le bouton 
injectera ce code dans la DIV vierge et le HTML sera interprété.
*/


$(document).ready(function() {
// ici mon code jquery..

  $('input[type=button]').on('click', function(){
		var texte = $('#monTexte').val();
    	$('div').html(texte);
    	//alert("Bonjour "+genre+"  "+prenom);
	});  
});