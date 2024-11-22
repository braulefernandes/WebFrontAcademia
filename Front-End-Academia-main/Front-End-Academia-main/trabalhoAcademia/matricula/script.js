// Função para aplicar máscara no CPF
function mascaraCPF(cpf) {
    cpf.value = cpf.value
        .slice(0, 14)
        .replace(/\D/g, '') // Remove caracteres que não são dígitos
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o primeiro ponto
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o traço
}

// Função para aplicar máscara na data
function mascaraData(data) {
    data.value = data.value
        .slice(0, 10)
        .replace(/\D/g, '') // Remove caracteres que não são dígitos
        .replace(/(\d{2})(\d)/, '$1/$2') // Adiciona a primeira barra
        .replace(/(\d{2})(\d{1,4})$/, '$1/$2'); // Adiciona a segunda barra
}

// Função para aplicar máscara no telefone
function mascaraTelefone(telefone) {
    telefone.value = telefone.value
        .slice(0, 15)
        .replace(/\D/g, '') // Remove caracteres que não são dígitos
        .replace(/(\d{2})(\d)/, '($1) $2') // Adiciona parênteses no DDD
        .replace(/(\d{5})(\d{1,4})$/, '$1-$2'); // Adiciona o traço no número
}

// Adicionando os eventos para aplicar as máscaras
document.getElementById('cpf').addEventListener('input', function () {
    mascaraCPF(this);
});

document.getElementById('data_nascimento').addEventListener('input', function () {
    mascaraData(this);
});

document.getElementById('telefone').addEventListener('input', function () {
    mascaraTelefone(this);
});


document.querySelector('.btn[data-bs-target="#exampleModal"]').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const genero = document.querySelector('input[name="radioSexo"]:checked');
    const generoSelecionado = genero ? genero.nextElementSibling.textContent : "Não selecionado";
    const plano = document.querySelector('input[name="radioPlano"]:checked');
    const planoSelecionado = plano ? plano.nextElementSibling.textContent : "Não selecionado";


    // Salvando no localStorage
    localStorage.setItem('dadosUsuario', JSON.stringify({
        nome,
        sobrenome,
        dataNascimento,
        telefone,
        cpf,
        email,
        senha,
        genero: generoSelecionado,
        plano: planoSelecionado
    }));

    alert('Dados salvos no localStorage!');
});

