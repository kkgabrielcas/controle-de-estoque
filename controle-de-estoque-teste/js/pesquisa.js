
document.addEventListener("DOMContentLoaded", () => {
    const inputPesquisa = document.getElementById("searchInput");

    inputPesquisa.addEventListener("input", function () {
        const filtro = this.value.toLowerCase();
        const linhas = document.querySelectorAll("table tbody tr");

        linhas.forEach(linha => {
            const descricao = linha.children[1].textContent.toLowerCase();

            if (descricao.includes(filtro)) {
                linha.style.display = "";
            } else {
                linha.style.display = "none";
            }
        });
    });
});
