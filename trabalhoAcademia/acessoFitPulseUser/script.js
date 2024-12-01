// document.addEventListener('mousedown', function(event) {
    
//     const buttons = document.querySelectorAll('.botao-opcao');
//     let clickedOutside = true;

//     buttons.forEach(button => {
//         if (button.contains(event.target)) {
//             clickedOutside = false;
//         }
//     });

//     if (clickedOutside) {
//         event.preventDefault();
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    // Pega todos os botões
    const buttons = document.querySelectorAll(".botao-opcao");
    
    // Pega todas as seções
    const sections = document.querySelectorAll("section");
    
    // Função para esconder todas as seções
    function hideSections() {
        sections.forEach(section => {
            section.style.display = "none";
        });
    }

    // Função para exibir a seção correspondente ao botão clicado
    function showSection(sectionId) {
        hideSections();  // Esconde todas as seções
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = "block";  // Exibe a seção clicada
        }
    }

    // Adiciona eventos de clique aos botões
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = button.textContent.trim().toLowerCase();
            
            if (buttonText === "início") {
                showSection("inico-user");
            } else if (buttonText === "meus treinos") {
                showSection("treinos-user");
            } else if (buttonText === "planos") {
                showSection("meus-planos");
            } else if (buttonText === "pagamentos") {
                showSection("meus-pagamentos");
            } else if (buttonText === "meu cadastro") {
                showSection("meu-cadastro");
            }
        });
    });

    // Exibe a primeira seção por padrão
    showSection("inico-user");
});

document.getElementById("btn-salvar").addEventListener("click", function () {
    // Seleciona todos os inputs do formulário
    const inputs = document.querySelectorAll(".meu-cadastro input");
    
    // Cria um objeto para armazenar os dados
    const dados = {};
    
    // Itera por cada input e adiciona ao objeto
    inputs.forEach(input => {
        dados[input.id] = input.value; // Usa o id do input como chave
    });
    
    // Converte o objeto para JSON e armazena no localStorage
    localStorage.setItem("dadosUsuarioAtualizado", JSON.stringify(dados));
    
    alert("Dados salvos com sucesso!");
});

function mostrarSecao(secao) {
    // Ocultar todas as seções
    let sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('visivel');
    });

    // Mostrar a seção selecionada
    document.getElementById(`${secao}-user`).classList.add('visivel');
}

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NO NOME
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-nome");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Nome");
});

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NO SOBRENOME
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-sobrenome");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Sobrenome");
});

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NO DATA DE NASCIMENTO
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-data_nascimento");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "28/08/2003");
});

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NO TELEFONE
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-telefone");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Telefone");
});

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NO CPF
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-cpf");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "064.030.713-27");
});

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NO EMAIL
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-email");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "E-mail");
});

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NO GENERO
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-genero");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Genero");
});

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NO PLANO
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-plano");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Plano");
});

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NA SENHA
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-senha");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Senha");
});


// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NO CEP
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-cep");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "CEP");
});

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER ENDEREÇO
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-endereco");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Endereço");
});

// COLOCAR A INFORMAÇÃO NO PLACEHOLDER NUMERO
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-numero");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Número");
});
// COLOCAR A INFORMAÇÃO NO PLACEHOLDER COMPLEMENTO
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-complemento");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Complemento");
});
// COLOCAR A INFORMAÇÃO NO PLACEHOLDER BAIRRO
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-bairro");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Bairro");
});
// COLOCAR A INFORMAÇÃO NO PLACEHOLDER CIDADE
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-cidade");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "Cidade");
});
// COLOCAR A INFORMAÇÃO NO PLACEHOLDER UF
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input
    const input = document.getElementById("input-uf");

    // Define o texto do placeholder dinamicamente
    input.setAttribute("placeholder", "UF");
});




// PEGA O NOME DO USUÁRIO
function nome_usuario(usuario) {
    const planoElemento = document.getElementById("nome-usuario");
    planoElemento.textContent = usuario;
}

document.addEventListener("DOMContentLoaded", () => {
    nome_usuario("Nome do Usuário");
});

// PEGA A INFORMAÇÃO DO PLANO
function informacao_plano(plano) {
    const planoElemento = document.getElementById("plano-texto");
    planoElemento.textContent = plano;
}

document.addEventListener("DOMContentLoaded", () => {
    informacao_plano("Plano Mensal");
});


// PEGA A INFORMAÇÃO DO PAGAMENTO
function informacao_pagamento(pagamento) {
    const planoElemento = document.getElementById("pagamento-texto");
    planoElemento.textContent = pagamento;
}

document.addEventListener("DOMContentLoaded", () => {
    informacao_pagamento("Sem Débitos");
});

// PEGA A INFORMAÇÃO DO TREINO DO DIA
function informacao_treino(treino) {
    const planoElemento = document.getElementById("treino-texto");
    planoElemento.textContent = treino;
}

document.addEventListener("DOMContentLoaded", () => {
    informacao_treino("Treino A");
});

// PEGA A INFORMAÇÃO DE CONVIDADOS
function informacao_convidados(convidados) {
    const planoElemento = document.getElementById("convidados-texto");
    planoElemento.textContent = convidados;
}

document.addEventListener("DOMContentLoaded", () => {
    informacao_convidados("5");
});

// PEGA A INFORMAÇÃO DA FREQUENCIA
function informacao_frequencia(frequencia) {
    const planoElemento = document.getElementById("frequencia-texto");
    planoElemento.textContent = frequencia;
}

document.addEventListener("DOMContentLoaded", () => {
    informacao_frequencia("99%");
});

// PEGA A INFORMAÇÃO DA VALOR DO PLANO
function informacao_valor_plano(valor_plano) {
    const planoElemento = document.getElementById("R$");
    planoElemento.textContent = valor_plano;
}

document.addEventListener("DOMContentLoaded", () => {
    informacao_frequencia("99%");
});

// PEGA A INFORMAÇÃO DA FREQUENCIA
function informacao_frequencia(frequencia) {
    const planoElemento = document.getElementById("frequencia-texto");
    planoElemento.textContent = frequencia;
}

document.addEventListener("DOMContentLoaded", () => {
    informacao_frequencia("99%");
});












// PEGA A INFORMAÇÃO DA SALDO DEVEDOR
function informacao_saldo_devedor(saldo_devedor) {
    const planoElemento = document.getElementById("saldo_devedor-texto");
    planoElemento.textContent = saldo_devedor;
}

document.addEventListener("DOMContentLoaded", () => {
    informacao_saldo_devedor("Sem saldo devedor");
});

// PEGA A INFORMAÇÃO DA SALDO CREDOR
function informacao_saldo_credor(saldo_credor) {
    const planoElemento = document.getElementById("saldo_credor-texto");
    planoElemento.textContent = saldo_credor;
}

document.addEventListener("DOMContentLoaded", () => {
    informacao_saldo_credor("Sem saldo credor");
});

