document.addEventListener("DOMContentLoaded", function () {
    let usuarioSalvo = localStorage.getItem("usuario"); // Recupera o usuário salvo

    if (usuarioSalvo) {
        document.getElementById("nomeUsuario").textContent = usuarioSalvo; // Insere o nome no HTML
    } else {
        document.getElementById("nomeUsuario").textContent = "Visitante"; // Caso não tenha usuário salvo
    }
});
