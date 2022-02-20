//metodo 1
// const tutto = document.querySelectorAll(".form-input");
//const labelle = document.querySelectorAll("label");
// console.log(`${labelle[0].textContent} ${tutto[0].value}`);
// console.log(`${labelle[1].textContent} ${tutto[1].value}`);
// console.log(`${labelle[2].textContent} ${tutto[2].value}`);
//metodo definitivo
const labelle = document.querySelectorAll(".form-input");

labelle.forEach((value) =>{
    console.log(`${value.previousElementSibling.textContent} ${value.value}`)
})