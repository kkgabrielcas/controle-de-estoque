import { supabase } from './supabaseClient.js';

let idParaExcluir = null;

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-delete")) {
        idParaExcluir = e.target.dataset.id;
        document.getElementById("modalConfirmacao").style.display = "flex";
    }
});

document.getElementById("btnCancelar").addEventListener("click", () => {
    document.getElementById("modalConfirmacao").style.display = "none";
    idParaExcluir = null;
});

document.getElementById("btnConfirmar").addEventListener("click", async () => {
    if (idParaExcluir) {
        const { error } = await supabase
            .from('login')
            .delete()
            .eq('id', idParaExcluir);

        if (error) {
            alert("Erro ao excluir: " + error.message);
        } else {
            location.reload(); 
        }

        document.getElementById("modalConfirmacao").style.display = "none";
        idParaExcluir = null;
    }
});
