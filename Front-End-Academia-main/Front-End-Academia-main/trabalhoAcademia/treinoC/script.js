document.addEventListener('mousedown', function(event) {
    
    const buttons = document.querySelectorAll('.botao-opcao');
    let clickedOutside = true;

    buttons.forEach(button => {
        if (button.contains(event.target)) {
            clickedOutside = false;
        }
    });

    if (clickedOutside) {
        event.preventDefault();
    }
});

document.querySelector('.botao-voltar').addEventListener('click', function() {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
});


// PEGA O NOME DO USUÁRIO
function nome_usuario(usuario) {
    const planoElemento = document.getElementById("nome-usuario");
    planoElemento.textContent = usuario;
}

document.addEventListener("DOMContentLoaded", () => {
    nome_usuario("Nome do Usuário");
});