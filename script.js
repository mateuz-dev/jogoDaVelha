const buttonComp = document.getElementById("vsComputador")

function mostrarDificuldade() {
    document.getElementById("dificuldade").style.display = "flex"
}

buttonComp.addEventListener("click", mostrarDificuldade())