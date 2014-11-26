/* Nous récupérons la valeur du INPUT "identifiant" et l'envoyons au fichier "fichier_cible.php".
Celui-ci va recueillir cette donnée et en faire ce que bon lui semblera (enregistrement dans une DB, calcul, envoi de l'info par email...)
Si celui-ci nous renvoi des informations, elles seront contenues dans "data". 
*/

$(document).ready(function() {
	$("#mon_form").submit(function(event) {
		event.preventDefault(); // annule l'action submit native
		var ident = $("input[name='identifiant']").val();
		$.post('fichier_cible.php', { id : ident }, function (data) {
			$('#reponse').html(data);
		});
	});
});