/* Exo 4.4 = Nombres premiers
Un nombre est premier si il n’est divisible que par 1 et par lui même. Exemples 2 ; 3 ; 5 ; 7 ; etc. Contre exemple : 6 = 2x3
Écrire un programme Javascript qui contrôle si le nombre saisi est premier ou pas. (utilisez un formulaire, comme précédemment)
*/

function test() {
  	// Récupération du numéro
  	var rep = "Nombre premier";
  	var temp;
  	var num = parseInt(window.document.getElementById('num').value);
  	// Vérification
  for (i=1;i<=num;i++) {
    if ((i==1) || (i==num)) {continue;}
    temp = num%i;
    if (temp==0) {rep = "Pas un nombre premier";}
  }
  alert(rep);
}