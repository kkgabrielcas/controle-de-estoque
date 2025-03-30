function abrirModal() {
    if (document.getElementById("modal")) return;

    let modalHtml = document.createElement("div");
    modalHtml.id = "modal";
    modalHtml.className = "modal";
    modalHtml.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="fecharModal()">&times;</span>
            <h2>Cadastrar Mercadoria</h2>
            <form>
                <div class="form-group">
                    <label for="codigoProduto">Código</label>
                    <input type="number" id="Código" required>
                </div>

                <div class="form-group">
                    <label for="nomeProduto">Nome do Produto</label>
                    <input type="text" id="nomeProduto" required>
                </div>

                <div class="form-group">
                    <label for="precoProduto">Preço</label>
                    <input type="number" id="precoProduto" required>
                </div>

                <div class="form-group">
                    <label for="quantidadeProduto">Quantidade</label>
                    <input type="number" id="quantidadeProduto" required>
                </div>

                <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
        </div>`;

    document.getElementById("modalContainer").appendChild(modalHtml);
    modalHtml.style.display = "flex";
}

function fecharModal() {
    let modal = document.getElementById("modal");
    if (modal) modal.remove();
}
