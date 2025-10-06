// Aguarda o DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Consulta DOM 
    const formCadastro = document.getElementById('formCadastro');
    const inputNome = document.getElementById('nome');
    const inputIdade = document.getElementById('idade');
    const inputCidade = document.getElementById('cidade');
    const corpoTabela = document.getElementById('corpoTabela');
    
    // Evento de submit do formulário
    formCadastro.addEventListener('submit', function(event) {
        // Previne recarregar a página
        event.preventDefault();
        
        // Obtém e limpa os valores dos campos
        const nome = inputNome.value.trim();
        const idade = inputIdade.value.trim();
        const cidade = inputCidade.value.trim();
        
        // Valida se os campos não estão vazios
        if (nome === '' || idade === '' || cidade === '') {
            // Exibe alerta se algum campo estiver vazio
            window.alert('Preencha todos os campos!');
            return; // Interrompe a execução se houver campos vazios
        }
        
        // Cria uma nova linha para a tabela
        const novaLinha = document.createElement('tr');
        
        // Cria as células para cada dado e define seu textContent
        const celulaNome = document.createElement('td');
        celulaNome.textContent = nome;
        
        const celulaIdade = document.createElement('td');
        celulaIdade.textContent = idade;
        
        const celulaCidade = document.createElement('td');
        celulaCidade.textContent = cidade;
        
        // Adiciona as células à linha
        novaLinha.appendChild(celulaNome);
        novaLinha.appendChild(celulaIdade);
        novaLinha.appendChild(celulaCidade);
        
        // Adiciona a linha ao corpo da tabela
        corpoTabela.appendChild(novaLinha);
        
        // Limpa os campos do formulário após o cadastro
        inputNome.value = '';
        inputIdade.value = '';
        inputCidade.value = '';
        
        // Foca novamente no campo nome para facilitar novo cadastro
        inputNome.focus();
    });
});