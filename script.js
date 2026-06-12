function abrir(event, id){

    document.getElementById(id).style.display = "flex";

    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));

    event.currentTarget.classList.add("active");
}

function fechar(id){

    document.getElementById(id).style.display = "none";

    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
}

window.onclick = function(e){
    document.querySelectorAll(".popup").forEach(p => {
        if(e.target === p){
            p.style.display = "none";
        }
    });
}