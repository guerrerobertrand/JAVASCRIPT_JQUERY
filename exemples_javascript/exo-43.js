/* Exo 4.3 = Validation, calcul et test
Partez de l’exercice précédent et assurez vous 
que le contenu du champ prix soit bien un nombre. Tronquez le à 2 chiffres après la virgule
Cadeau bonux : Essayez de faire en sorte que le champ “frais de transport” ne soit pas modifiable ...
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
	
	//Validation (prixHT == nombre; si float tronquer à 2 décimales)
	
	if(isFinite(prixHT)){
		//traitement des flottants
		parseFloat(prixHT);	
    }	
		//calcul frais
		if (prixHT < 100){
			frais += 12;
		}else if (prixHT > 100){
			diff = parseInt(prixHT/100);
			frais = 12+(6*diff);
		}
	
	//champ écriture valeur
	monForm.elements["frais"].value = parseFloat(monForm.elements["prixHT"].value)+parseInt(frais);

	monForm.elements["frais"].value = roundDecimal(monForm.elements["frais"].value,2);
  
	}


function roundDecimal(nombre, precision){
    var precision = precision || 2;
    var tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
}


