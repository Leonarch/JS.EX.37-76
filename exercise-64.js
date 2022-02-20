const tasto1 = document.getElementById("fetch-post");

const tasto2 = document.getElementById("save-post");

const post = tasto1.onclick = async () => {
    const contenuno = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const disponibile = await contenuno.json();
    tasto2.onclick = () => localStorage.setItem("post" , disponibile);
     }