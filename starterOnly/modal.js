function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


////////////////////////////////////////// PROJET 4
///////// 1. CLOSE MODAL
const modalClose = document.getElementsByClassName("close")[0];
modalClose.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

///////// 2. IMPLEMENTER ENTREES DU FORMULAIRE
///// A. LIER LABELS AUX ENTREES DANS LE HMTL EN UTILISANT "FOR" & "ID" DANS LE CODE EXISTANT. CORRIGER SI NECESSAIRE
/// ---> DONE


///// B. PAS DE JQUERY / PUR JAVASCRIPT
// LE FORMULAIRE DOIT ÊTRE VALIDE QUAND L'UTILISATEUR CLIQUE SUR "Submit"



// LES DONNEES SUIVANTES DOIVENT ÊTRE SAISIES CORRECTEMENT

// LE CHAMP PRéNOM A UN MINIMUM DE 2 CARACTèRES / N'EST PAS VIDE
const firstName = document.getElementById('first');
const firstNameValidation = document.getElementsByClassName('validation')[0];

firstName.addEventListener('change', function(firstNameChanged) {
  if (firstName.value.length < 2) {
    firstNameValidation.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstNameValidation.style.color = 'red';
  } else {
    firstNameValidation.innerHTML = "Ce prénom est valide!"
    firstNameValidation.style.color = 'green';
  }
});


// LE CHAMP DU NOM DE FAMILLE A UN MINIMUM DE 2 CARACTèRES / N'EST PAS VIDE
const lastName = document.getElementById('last');
const lastNameValidation = document.getElementsByClassName('validation')[1];

lastName.addEventListener('change', function(lastNameChanged) {
  if (lastName.value.length < 2) {
    lastNameValidation.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastNameValidation.style.color = 'red';
  } else {
    lastNameValidation.innerHTML = "Ce nom est valide!"
    lastNameValidation.style.color = 'green';
  }
});


// L'ADRESSE ELECTRONIQUE EST VALIDE
const mailAdress = document.getElementById('email');
const mailValidation = document.getElementsByClassName('validation')[2];

mailAdress.addEventListener('change', function(mailAdressChanged) {
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (mailAdress.value.match(mailFormat)) {
    mailValidation.innerHTML = "Cette adresse email est valide!";
    mailValidation.style.color = 'green';
  } else {
    mailValidation.innerHTML = "Cette adresse email est invalide!";
    mailValidation.style.color = 'red';
  }
});


// POUR LE NOMBRE DE CONCOURS, UNE VALEUR NUMÉRIQUE

// UN BOUTON RADIO EST SÉLECTIONNÉ
const radioLocation = document.querySelector('input[type="radio"]');
const locationValidation = document.getElementsByClassName('validation')[3];

radioLocation.addEventListener('click', function(locationSelected) {
  if (radioLocation.checked = true) {
    locationValidation.innerHTML = "Vous avez sélectionné un lieu!";
    locationValidation.style.color = "green";
  }
});

// LA CASE DES CONDITIONS GÉNÉRALES EST COCHÉE, L'AUTRE CASE EST FACULTATIVE / PEUT ÊTRE LAISSÉE DÉCOCHÉE.
const conditions = document.getElementById('checkbox1');
const conditionsValidation = document.getElementsByClassName('validation')[4];

conditions.addEventListener('click', function(conditionsUnchecked) {
  if (conditions.checked = false) {
    conditionsValidation.innerHTML = "Vous devez accepté les conditions d'utilisation";
    conditionsValidation.style.color = "red";
  }
});

// CONSERVER LES DONNÉES DU FORMULAIRE (NE PAS EFFACER LE FORMULAIRE) LORSQU'IL NE PASSE PAS LA VALIDATION
const submitButton = document.querySelector('input[type="submit"]');

 submitButton.addEventListener('submit', function(e) {
   if (conditions.checked === false) {
     conditionsValidation.innerHTML = "Vous devez accepté les conditions d'utilisation.";
     e.preventDefault();
   }
 });
