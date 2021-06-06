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


const submitModal = document.forms[0];

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const mailAdress = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const tourneys = document.getElementById('quantity');
const radioLocations = document.querySelectorAll('input[type="radio"]');
const conditions = document.getElementById('checkbox1');

const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let result = tourneys.value;

const today = new Date(); 

const firstNameValidation = document.getElementsByClassName('validation')[0];
const lastNameValidation = document.getElementsByClassName('validation')[1];
const mailValidation = document.getElementsByClassName('validation')[2];
const locationValidation = document.getElementsByClassName('validation')[3];
const conditionsValidation = document.getElementsByClassName('validation')[4];

const newElt = document.createElement('span');
let elt = document.getElementsByClassName('formData');


submitModal.addEventListener('submit', function(e) {
  let isLocationChecked;
  for (radioLocation of radioLocations) {
    if (radioLocation.checked) {
      isLocationChecked = 1;
      break;
    }
  };

  const birth = new Date(birthDate.value);
 
  if (firstName.value.length < 2) {
    e.preventDefault();
    elt[0].appendChild(newElt);
    document.querySelector('div.formData > span').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    document.querySelector('div.formData > span').classList.add("error");
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
    elt[6].appendChild(newElt);
    document.querySelector('div.formData > span').innerHTML = "Vous devez accepter les conditions d'utilisation.";
    document.querySelector('div.formData > span').classList.add("error");
  }
});