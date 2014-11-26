/* Exo 4.1 = Calcul
Créez le formulaire suivant et faites en sorte que la “case” prix ttc soit
automatiquement remplie.
Vous utiliserez l’événement onChange pour lancer votre fonction javascript
*/

function affiche(){

	//variable formulaire
	var monForm = window.document.monForm;
    //alert(window.document.monForm.name);
	
    //champ lecture valeur
    var prixHT = monForm.prixHT.value;
    //alert(prixHT);
	var prixTTC = monForm.prixTTC.value;
	//alert(prixTTC);	
	
    //calcul prixTTC + TVA
	//var tva = new Number();
	var tva = prixHT * 0.2;

	
	//champ écriture valeur
	document.forms["monForm"].elements["prixTTC"].value = parseInt(document.forms["monForm"].elements["prixHT"].value)+parseFloat(tva);
	
	}

