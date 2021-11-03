const buttonComp = document.getElementById("vsComputador")

function mostrarDificuldade() {
    const dificuldade = document.getElementById("dificuldade")
    dificuldade.style.display = "flex"
}

buttonComp.addEventListener("click", mostrarDificuldade())