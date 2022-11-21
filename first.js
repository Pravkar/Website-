  let fetchbtn = document.getElementById("om");
 fetchbtn.addEventListener('click',buttom)
 function buttom ()
 {
     console.log();
     const xhttp = new XMLHttpRequest();
     xhttp.open('GET','https://catfact.ninja/fact?max_length=140',true);
     xhttp.onprogress =  function ()
    {
        console.log("on progressing ");
        
    }
    xhttp.onload = function ()
    {
       document.getElementById("op").innerHTML= this.responseText;
        
    }
     xhttp.send();
 }
