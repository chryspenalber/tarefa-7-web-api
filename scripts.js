// Salva todos os dados do formulário no localStorage
function salvarDadosFormulario() {
    const dados = {
        cep: document.getElementById('cep').value,
        logradouro: document.getElementById('logradouro').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
    };
    // Converte o objeto para string JSON e salva com uma única chave
    localStorage.setItem('dadosFormulario', JSON.stringify(dados));
}

// Restaura os dados do localStorage ao carregar a página
function restaurarDadosFormulario() {
    // Pega a string salva no localStorage
    const dadosSalvos = localStorage.getItem('dadosFormulario');
    if (dadosSalvos) {
        // Converte a string JSON de volta para um objeto JavaScript
        const dados = JSON.parse(dadosSalvos);

        // Preenche os campos do formulário com os dados restaurados
        document.getElementById('cep').value = dados.cep || '';
        document.getElementById('logradouro').value = dados.logradouro || '';
        document.getElementById('bairro').value = dados.bairro || '';
        document.getElementById('cidade').value = dados.cidade || '';
        document.getElementById('estado').value = dados.estado || '';
    }
}
// Adiciona o evento de 'load' para restaurar os dados assim que a página carrega
window.addEventListener('load', restaurarDadosFormulario);


// Ouve o evento "input" em todos os campos para salvar as alterações
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("input", salvarDadosFormulario);
});

// Busca endereço no ViaCEP quando sair do campo CEP
document.getElementById("cep").addEventListener("blur", (evento) => {
    const cepInformado = evento.target.value;

    if (!(cepInformado.length === 8)) return;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;

                // Salva os dados completos após o preenchimento automático
                salvarDadosFormulario();

            } else {
                alert("CEP não encontrado.");
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP: ", error));
});

// Limpa o formulário e o localStorage
document.getElementById("limpar").addEventListener("click", () => {
    localStorage.removeItem("dadosFormulario");

    // Limpa os inputs
    document.querySelectorAll("input").forEach(input => input.value = "");
});
