/* Aucune information n'est envoyée ici. Nous souhaitons juste interroger le fichier "fichier_cible.php" afin qu'il nous renvoi une information.
Elle sera contenue dans "data". Il ne nous reste plus qu'à l'injecter dynamiquement dans la DIV prévue à cet effet.  
*/

$(document).ready(function() {
	$("#mon_form").submit(function(event) {
		event.preventDefault(); // annule l'action submit native
		$.get('fichier_cible.php', function (data) {
			$('#reponse').html(data);
		});
	});
});