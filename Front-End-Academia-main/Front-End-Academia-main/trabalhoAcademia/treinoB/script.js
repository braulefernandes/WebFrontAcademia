// PEGA O NOME DO USUÁRIO
function nome_usuario(usuario) {
    const planoElemento = document.getElementById("nome-usuario");
    planoElemento.textContent = usuario;
}

document.addEventListener("DOMContentLoaded", () => {
    nome_usuario("Nome do Usuário");
});