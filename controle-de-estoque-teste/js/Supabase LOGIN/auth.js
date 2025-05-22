const usuario = localStorage.getItem('usuarioLogado');

if (!usuario) {
    window.location.href = 'login.html';
}