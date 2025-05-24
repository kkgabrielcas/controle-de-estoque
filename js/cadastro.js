import { supabase } from './supabaseClient.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    try {
      const { error } = await supabase
        .from('login')
        .insert([{ usuario, senha }]);

      if (error) {
        alert(`Erro ao cadastrar: ${error.message}`);
        console.error(error);
      } else {
        alert('Usuário cadastrado com sucesso!');
        form.reset();
        window.location.href = 'login.html';
      }
    } catch (err) {
      console.error('Erro inesperado:', err);
      alert('Erro ao conectar com o servidor.');
    }
  });
});
