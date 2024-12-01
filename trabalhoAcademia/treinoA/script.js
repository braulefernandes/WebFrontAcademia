function nome_usuario(usuario) {
    const planoElemento = document.getElementById("nome-usuario");
    if (planoElemento) {
        console.log("Elemento encontrado. Adicionando texto...");
        planoElemento.textContent = usuario;
    } else {
        console.error("Elemento 'nome-usuario' não encontrado!");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    nome_usuario("Nome do Usuário");
});
