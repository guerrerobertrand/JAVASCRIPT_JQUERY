/* EXO 2 BONUS 

LES BASES
Créez un premier formulaire comportant :
- Un INPUT "text" ainsi qu'un LABEL "titre".
- Un bouton "CREER"

En dessous, créez un second formulaire comportant :
- Un bouton "QUANTITE".
- Un bouton "INFORMATIONS"

Mettez ces 2 formulaires un peu en forme avec du CSS afin qu'on puisse bien les distinguer.

OBJECTIFS
Lorsque l'utilisateur aura rempli le champ "titre", un clic sur le bouton "CREER" injectera dans le second formulaire, avant le bouton "QUANTITE" un INPUT "text" avec pour NAME ce qu'aura écrit l'utilisateur .
Bien évidemment, si le champ est vide à l'appui du bouton, il faudra demander une nouvelle saisie et ne pas procéder à la création.
Un clic sur le bouton "QUANTITE" fera apparaitre une pop-up qui nous donnera le nombre de balises INPUT trouvé dans le second formulaire.
Un clic sur le bouton "INFORMATIONS" fera apparaitre l'intégralité des informations du second formulaire dans une pop-up : le NOM des input ainsi que leur éventuelle VALEUR.
Vous utiliserez la méthode serialize() pour réaliser cette dernière étape.

*/



$('document').ready(function(){
//code jquery ici

  //Bouton CREER
  $('#creer').on('click', function(){
	    var texte = $("#monTexte").val();
    	var Form1 = $('#Form1');
	    var Form2 = $('#Form2');
     //alert(texte);
  
    if(texte != ""){
      var temp = $('#Form2 #liste').before("<input type='text'id='temp' name=\"" + texte +"\" placeholder=\"" + texte + "\"/>");
    } else
    {
      	alert('veuillez saisir un texte svp !');
    }
	// on doit placer le texte saisi (monTexte) dans l'attribut name...
    //$('temp').attr(name) = texte;
 	//alert($('temp').attr(name) = 'texte');
  });
  
	//Bouton QUANTITE
  	$('#quantite').on('click', function(){
  	 	var compte = $('#Form2 input[type=text]').length;
   		alert('le compte de balises input text est : '+compte);
  	});

	//Bouton INFORMATIONS
  
    $('#infos').on('click', function(){
		var data = $('#Form2').serialize();
    	alert('les infos du Formulaire 2 sont : '+data);
  	});
  
}); //Fin
