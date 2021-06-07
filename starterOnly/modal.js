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
// DOM ELEMENTS
const submitModal = document.forms[0];
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const mailAdress = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const tourneys = document.getElementById('quantity');
const radioLocations = document.querySelectorAll('input[type="radio"]');
const conditions = document.getElementById('checkbox1');

// ERROR MESSAGE
const newElt = document.createElement('span');
let elt = document.getElementsByClassName('formData');

// SOUMETTRE LE FORMULAIRE
submitModal.addEventListener('submit', function(e) {
  let isLocationChecked;
  for (radioLocation of radioLocations) {
    if (radioLocation.checked) {
      isLocationChecked = 1;
      break;
    }
  };

  // REGULAR EXPRESSION
  const mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  // DATES
  const birth = new Date(birthDate.value);
  const today = new Date(); 
 
  if (firstName.value.length < 2) {
    e.preventDefault();
    elt[0].appendChild(newElt);
    document.querySelector('div.formData > span').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    document.querySelector('div.formData > span').classList.add("error");
    firstName.style.border = "red";
  } else if (lastName.value.length < 2) {
    e.preventDefault();
    elt[1].appendChild(newElt);
    document.querySelector('div.formData > span').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    document.querySelector('div.formData > span').classList.add("error");
   } else if (!(mailAdress.value.match(mailFormat))) {
    e.preventDefault();
    elt[2].appendChild(newElt);
    document.querySelector('div.formData > span').innerHTML = 'Cette adresse email est invalide!';
    document.querySelector('div.formData > span').classList.add("error");
  } else if ((birth > today) || (birthDate.value === "")) {
    e.preventDefault();
    elt[3].appendChild(newElt);
    document.querySelector('div.formData > span').innerHTML = 'Vous devez entrer une date de naissance valide.';
    document.querySelector('div.formData > span').classList.add("error");
  } else if ((tourneys.value.length < 1) || (tourneys.value == NaN)) {
    e.preventDefault();
    elt[4].appendChild(newElt);
    document.querySelector('div.formData > span').innerHTML = 'Vous devez insérez une valeur numérique.';
    document.querySelector('div.formData > span').classList.add("error");
  } else if (isLocationChecked !== 1) {
    e.preventDefault();
    elt[5].appendChild(newElt);
    document.querySelector('div.formData > span').innerHTML = 'Vous devez sélectionner une ville.';
    document.querySelector('div.formData > span').classList.add("error");
    document.querySelector('div.formData > span').style.display = 'block';
  } else if (!(conditions.checked)) {
    e.preventDefault();
    elt[6].insertBefore(newElt, document.getElementById('checkbox2'));
    document.querySelector('div.formData > span').innerHTML = "Vous devez accepter les conditions d'utilisation.";
    document.querySelector('div.formData > span').classList.add("error");
  } else {
    e.preventDefault();
    document.querySelector('.modal-body > form').style.display = "none";

    // MESSAGE
    document.querySelector('.modal-body').appendChild(newElt);
    document.querySelector('.modal-body > span').innerHTML = "Merci ! Votre réservation a été reçue.";

    // CLOSE BUTTON
    const btn = document.createElement("button");
    document.querySelector('.modal-body').appendChild(btn);
    document.querySelector('.modal-body button').innerHTML = "Fermer";
    document.querySelector('.modal-body button').classList.add("btn-signup");
    
    document.querySelector('.modal-body button').addEventListener('click', function () {
      closeModal();
    });
  }
});