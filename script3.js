function mostrarFinal(){
    document.getElementById("finalPopup").style.display = "flex";
}

window.onclick = function(event){
    const popup = document.getElementById("finalPopup");

    if(event.target === popup){
        popup.style.display = "none";
    }
}