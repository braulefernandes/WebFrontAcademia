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

document.getElementById('dataNascimento').addEventListener('input', function () {
    mascaraData(this);
});

document.getElementById('telefone').addEventListener('input', function () {
    mascaraTelefone(this);
});

// Seleciona o formulário e os campos
const formulario = document.querySelector("#formulario");
const inome = document.querySelector("#nome");
const isobrenome = document.querySelector("#sobrenome");
const icpf = document.querySelector("#cpf");
const idataNascimento = document.querySelector("#dataNascimento");
const itelefone = document.querySelector("#telefone");
const iemail = document.querySelector("#email");
const isenha = document.querySelector("#senha");

// Função para converter a data no formato "dd/mm/yyyy" para "yyyy-mm-dd"
function formatarData(data) {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes}-${dia}`;
}

// Função para mapear o tipo de plano para strings
function mapearPlano(plano) {
    switch (plano) {
        case 'diário':
            return "Diário";
        case 'mensal':
            return "Mensal";
        case 'anual':
            return "Anual";
        default:
            return null; // Retorna null caso o plano não seja válido
    }
}

// Função para cadastrar um usuário
function cadastrar() {
    // Concatena nome e sobrenome
    const nomeCompleto = `${inome.value} ${isobrenome.value}`.trim();
    
    // Formata a data de nascimento
    const dataFormatada = formatarData(idataNascimento.value);
    
    // Obtém o valor do plano selecionado diretamente
    const planoSelecionado = document.querySelector('input[name="radioPlano"]:checked').value;

    // Obtém o valor do gênero selecionado
    const generoSelecionado = document.querySelector('input[name="radioSexo"]:checked')?.value || '';

    fetch("http://localhost:8080/usuario/cadastrar", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: nomeCompleto, // Nome completo concatenado
            cpf: icpf.value,
            dataNascimento: dataFormatada, // Data no formato "yyyy-mm-dd"
            telefone: itelefone.value,
            email: iemail.value,
            senha: isenha.value,
            genero: generoSelecionado,
            plano: planoSelecionado // Plano já selecionado diretamente
        })
    })
    .then(res => {
        if (res.ok) {
            console.log("Cadastro realizado com sucesso!");
            // Exibe o modal de sucesso
            var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
            myModal.show();
        } else {
            console.error("Erro no cadastro:", res.statusText);
        }
    })
    .catch(err => console.error("Erro na requisição:", err));
}

// Limpa os campos após o envio
function limpar() {
    inome.value = "";
    isobrenome.value = "";
    icpf.value = "";
    idataNascimento.value = "";
    itelefone.value = "";
    iemail.value = "";
    isenha.value = "";
    const igenero = document.querySelector('input[name="radioSexo"]:checked');
    const iplano = document.querySelector('input[name="radioPlano"]:checked');
    if (igenero) igenero.checked = false;
    if (iplano) iplano.checked = false;
}

// Captura o evento de submissão do formulário
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    cadastrar(); // Chama a função de cadastro
    limpar(); // Limpa os campos
});