import { supabase } from './supabaseClient.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    const { data, error } = await supabase
        .from('login')
        .select('*')
        .eq('usuario', email)
        .eq('senha', senha)
        .single();

    if (error || !data) {
        document.getElementById('mensagemErro').textContent = 'Usuário ou senha incorretos.';
        console.error('Erro no login:', error);
    } else {
        localStorage.setItem('usuarioLogado', JSON.stringify(data));
        window.location.href = 'main.html'; 
    }
});
