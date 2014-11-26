function charge() {
	
	//0-inutile pour IE
	/*if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}*/

	//1-instanciation
	monAjax = new XMLHttpRequest();

	//2-proprietes Ajax
	/* voir le cours : préparation, lecture, envoi,...
	state 4 = Bon ; status = 200 (tout va bien) ex: 404 not Found;
	*/
	//vérification/préparation
	monAjax.onreadystatechange=function() { //préparation
		if (monAjax.readyState==4 && monAjax.status==200){
		//ciblage de l'élément (id="fable")
			window.document.getElementById('fable').innerHTML=monAjax.responseText;
		}
	} 
	//fichier entrée du traitement, mode asynchrone (true)
	//GET on récupère des infos du fichier txt
	//POST on fait les deux on récupère et on envoie
	monAjax.open("GET","la_cigale_et_la_fourmi.txt",true);
	//Envoi de la requête / lancement du traitement
	monAjax.send();
}