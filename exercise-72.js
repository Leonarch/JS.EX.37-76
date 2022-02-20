const nome = document.getElementById("firstName");
const cognome = document.getElementById("lastName");
const eta = document.getElementById("age");

let person = {
      firstName : nome.value,
      lastName : cognome.value,
      age :  eta.value
}

const jsonperson = JSON.stringify(person);
console.log(jsonperson);

const forme = document.querySelector("form");
forme.setAttribute("data-person", jsonperson); 