import {supabase} from './js/supabaseClient.js';

function abrirModal() {
    if (document.getElementById("modal")) return;

    let modalHtml = document.createElement("div");
    modalHtml.id = "modal";
    modalHtml.className = "modal";
    modalHtml.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="fecharModal()">&times;</span>
            <h2>Cadastrar Mercadoria</h2>
            <form id="produtoForm">
                <div class="form-group">
                    <label for="codigoProduto">Código</label>
                    <input type="number" id="codigoProduto" required>
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

    document.getElementById("produtoForm").addEventListener("submit", salvarProduto);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn-add").addEventListener("click", abrirModal);
});

function fecharModal() {
    let modal = document.getElementById("modal");
    if (modal) modal.remove();
}

async function salvarProduto(event) {
    event.preventDefault(); 

    
    const codigo = document.getElementById("codigoProduto").value;
    const nome = document.getElementById("nomeProduto").value;
    const preco = parseFloat(document.getElementById("precoProduto").value);
    const quantidade = parseInt(document.getElementById("quantidadeProduto").value);

    
    const { data, error } = await supabase
        .from("produtos")
        .insert([{ codigo, nome, preco, quantidade }]);

    if (error) {
        console.error("Erro ao salvar produto:", error);
        alert("Erro ao salvar produto!");
    } else {
        console.log("Produto salvo com sucesso:", data);
        alert("Produto cadastrado com sucesso!");
        fecharModal(); 
    }
}

window.abrirModal = abrirModal;