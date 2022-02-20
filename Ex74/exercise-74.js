const creator = document.getElementById("person-form");

const initForm = (() => {
    let cos = document.createElement("tr"); 
    cos.innerHTML = "<input type='text' name='firstName'/> <input type='text' name='lastName'/> <input type='text' name='age'/>";
    creator.append(cos);
});

window.onload = initForm();


const nome = document.querySelector("input[name='firstName']");
const cognome = document.querySelector("input[name='lastName']");
const eta = document.querySelector("input[name='age']");

const submitPersonForm = ((unparametro) => {
    unparametro.preventDefault();
    let person ={
        firstName : nome.value,
        lastName : cognome.value,
        age: eta.value
    }
    console.log(person);
})

const esegui = document.querySelector("button");
esegui.onclick = submitPersonForm;