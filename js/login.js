document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio automático do formulário

        let usuario = document.getElementById("usuario").value; // Captura o valor do input
        localStorage.setItem("usuario", usuario); // Armazena no Local Storage
        
        window.location.href = "index.html"; // Redireciona para a página principal
    });
});
