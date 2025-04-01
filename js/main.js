import { supabase } from './js/supabaseClient.js';

async function carregarProduto() {
    const { data, error } = await supabase
        .from('produtos') 
        .select('*');

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; 

    data.forEach((produto) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.codigo}</td>
            <td>${produto.nome}</td>
            <td>R$${produto.preco.toFixed(2)}</td>
            <td>${produto.quantidade}</td>
            <td>
                <button class="btn btn-delete">Excluir</button>
                <button class="btn btn-edit">Editar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', carregarProduto);
