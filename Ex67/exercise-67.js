async function amuni(){
    const tutto = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todo = await tutto.json();
    const number4 = todo.find( ele => ele.id == 4);
    console.log(number4);
    
    
    const acca2 = document.createElement("h2");
    acca2.innerHTML = number4.title;
    
    const impulso = document.createElement("input");
    impulso.type="checkbox";
    impulso.checked = number4.completed;
    
    container.append(acca2);
    container.append(impulso); }
    
    amuni();