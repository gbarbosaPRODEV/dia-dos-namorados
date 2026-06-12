function abrirPresente(){
    document.getElementById("popupPresente").style.display = "flex";
}

function fecharPresente(){
    document.getElementById("popupPresente").style.display = "none";
}

window.onclick = function(event){
    let popup = document.getElementById("popupPresente");

    if(event.target === popup){
        popup.style.display = "none";
    }
}