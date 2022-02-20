const addRow = () =>{
    let cos=document.createElement("tr");
    cos.innerHTML = "<input type='text' name='firstName'/> <input type='text' name='lastName'/> <input type='text' name='age'/>";
    let table = document.querySelector("tbody");
    table.append(cos);
}

const prova = document.getElementById("add-row");
prova.onclick = addRow;