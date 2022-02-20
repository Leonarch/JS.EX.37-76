async function amuni(){
 
    const postback = localStorage.getItem("post");
   
   const recupero = await JSON.parse(postback);
   
    console.log(recupero);
   
    const posttitle = document.querySelector("#post-title");
   
   console.log(posttitle);
   
    posttitle.innerHTML = postback.title;}
   
    amuni();