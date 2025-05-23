import { supabase } from './supabaseClient.js';

async function carregarLogin() {
    const { data, error } = await supabase
        .from('login')
        .select('*');

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; 

    if (error) {
        console.error('Erro ao carregar dados:', error);
        alert('Ocorreu um erro ao carregar os dados.');
        return;
    }

    data.forEach((login) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${login.usuario}</td>
            <td>${login.senha}</td>
            <td>
                <button class="btn btn-delete" data-id="${login.id}">Excluir</button>
                <button class="btn btn-edit">Editar</button>
            </td>
        `;
        
        // Adicionando evento de click para o botão de edição
        const btnEdit = tr.querySelector('.btn-edit');
        if (btnEdit) {
            btnEdit.addEventListener('click', () => {
                alert('Funcionalidade de editar ainda não implementada.');
                // Aqui você pode adicionar a lógica para edição de login
            });
        }

        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            localStorage.removeItem('usuarioLogado');
        });
    }

    carregarLogin(); 
});
