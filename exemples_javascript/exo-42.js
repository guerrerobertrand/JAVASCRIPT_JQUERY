/* Exo 4.2 = Calcul et test
Un peu plus compliqué :
Créez le formulaire suivant et faites en sorte que la “case” transport soit
automatiquement remplie. Pour un prix entre 1 et 100, compter un forfait de 12
euros. Au delà ajoutez 6 euros par tranche de 100. (exemple : prix ht 230 euros
+ 12 + 6 + 6
*/

function affiche(){

	//variable formulaire
	var monForm = window.document.monForm;
    //alert(window.document.monForm.name);
	
    //champ lecture valeur
    var prixHT = monForm.prixHT.value;
    //alert(prixHT);
	
	var frais = monForm.frais.value;
	//alert(prixTTC);	
	
    //calcul frais
	if (prixHT < 100){
		plusFrais = 12;
	}else if (parseInt(prixHT/100)>1){
		plusFrais = 6;
	}
	
	//champ écriture valeur
	document.forms["monForm"].elements["frais"].value = parseInt(document.forms["monForm"].elements["prixHT"].value)+parseInt(plusFrais);
	
	}

