function validateForm() {
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var email = document.getElementById("email").value;
var ville = document.getElementById("ville").value;
var pays = document.getElementById("pays").value;
var telephone = document.getElementById("telephone").value;
var nomp = document.getElementById("nomp").value;
var num = document.getElementById("num").value;
var nom = document.getElementById("nom").value;

if(nom== "") {
alert("Veillez insérer votre Nom");
document.getElementById("nom").style.backgroundColor="red";
document.getElementById("nom").focus();
//nom.focus();
return false;
}
if(prenom == "") {
alert("Veillez insérer votre Prénom");
document.getElementById("prenom").style.backgroundColor="red";
document.getElementById("prenom").focus();
return false;
}
if(email == "") {
alert("Veillez insérer votre Email");
document.getElementById("email").style.backgroundColor="red";
document.getElementById("email").focus();
return false;
}

if(ville == "") {
alert("Veillez insérer votre ville");
document.getElementById("ville").style.backgroundColor="red";
document.getElementById("ville").focus();
return false;
}
if(pays == "") {
alert("Veillez insérer votre pays");
document.getElementById("pays").style.backgroundColor="red";
document.getElementById("pays").focus();
return false;
}
if(telephone == "") {
alert("Veillez insérer votre numero de telephone");
document.getElementById("telephone").style.backgroundColor="red";
document.getElementById("telephone").focus();
return false;
}
if(nombrprd == "") {
alert("Veillez insérer le nombre du produit a acheter");
document.getElementById("nombrprd").style.backgroundColor="red";
document.getElementById("nombrprd").focus();
return false;
}
if(numprd == "") {
alert("Veillez insérer le numero du produit");
document.getElementById("numprd").style.backgroundColor="red";
document.getElementById("numprd").focus();
return false;
}
if(nombrq == "") {
alert("Veillez insérer le nombre de quantite");
document.getElementById("nombrq").style.backgroundColor="red";
document.getElementById("nombrq").focus();
return false;
}

return true;
}
function validateEmail(champsText){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(champsText.value.match(mailformat)){
document.form.email.focus();
document.getElementById("email").style.backgroundColor="white";
return true;
}else{
alert("Veuillez insérer une adresse email valide!");
document.getElementById("email").style.backgroundColor="red";
document.form.email.focus();
return false;
}
}
function nomValidate() { 

var letters = /^[A-Za-z]+$/;
var nom = document.getElementById("nom");
if(nom.value.match(letters)) {
document.getElementById("nom").style.backgroundColor="white";
return true;
} else {
alert('Le nom ne doit contenir que des lettres');
document.getElementById("nom").style.backgroundColor="red";
document.getElementById("nom").focus();
return false;
}
}
function prenomValidate() { 

var letters = /^[A-Za-z]+$/;
var prenom = document.getElementById("prenom");
if(prenom.value.match(letters)) {
document.getElementById("prenom").style.backgroundColor="white";
return true;
} else {
alert('Le prenom ne doit contenir que des lettres');
document.getElementById("prenom").style.backgroundColor="red";
document.getElementById("prenom").focus();
return false;
}
}
function teleValidate() { 

var numero = /[0-9]\d{10}/;
var numero = document.getElementById("telephone");
if(telephone.value.match(numero)) {
document.getElementById("telephone").style.backgroundColor="white";
return true;
} else {
alert('Le numero du telephone ne doit contenir que des chiffres');
document.getElementById("telephone").style.backgroundColor="red";
document.getElementById("telephone").focus();
return false;
}
}

function villeValidate() { 

var letters = /^[A-Za-z]+$/;
var ville = document.getElementById("ville");
if(ville.value.match(letters)) {
document.getElementById("ville").style.backgroundColor="white";
return true;
} else {
alert('Le nom du ville ne doit contenir que des lettres');
document.getElementById("ville").style.backgroundColor="red";
document.getElementById("ville").focus();
return false;
}
}

function numberValidate() { 

var numero = /^[A-Za-z]+$/;
var nombp = document.getElementById("nomp");
var nomb = document.getElementById("nom");
var numb = document.getElementById("num");
if(nombp.value.match(numero)) {
document.getElementById("nomp").style.backgroundColor="white";
return true;
} else {
alert('ce champ doit contenir que des chiffres');
document.getElementById("nomp").style.backgroundColor="red";
document.getElementById("nomp").focus();
return false;}
if(nomb.value.match(numero)) {
document.getElementById("nom").style.backgroundColor="white";
return true;
} else {
alert('ce champ ne doit contenir que des chiffres');
document.getElementById("nom").style.backgroundColor="red";
document.getElementById("nom").focus();
return false;
}
if(numb.value.match(numero)) {
document.getElementById("num").style.backgroundColor="white";
return true;
} else {
alert('ce champ ne doit contenir que des chiffres');
document.getElementById("num").style.backgroundColor="red";
document.getElementById("num").focus();
}
}


