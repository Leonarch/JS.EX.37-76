async function amuni(){
    const lista = document.querySelector(".todo-list");
    const recovery = await fetch("https://jsonplaceholder.typicode.com/todos");
    const post = await recovery.json();
     post.forEach(todo => {
         let elemento = document.createElement("li");
         elemento.innerHTML = todo.title;
         elemento.append(lista);
         console.log(elemento);
     })
    }
    amuni();