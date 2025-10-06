// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Consulta DOM 
    const inputTarefa = document.getElementById('inputTarefa');
    const btnAdicionar = document.getElementById('btnAdicionar');
    const listaTarefas = document.getElementById('listaTarefas');
    
    // Evento de clique no botão Adicionar
    btnAdicionar.addEventListener('click', function() {
        adicionarTarefa();
    });
    
    // Evento de pressionar Enter no campo de texto
    inputTarefa.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarTarefa();
        }
    });
    
    // Função para adicionar uma nova tarefa
    function adicionarTarefa() {
        // Obtém o valor do input e remove espaços em branco
        const texto = inputTarefa.value.trim();
        
        // Verifica se o campo não está vazio
        if (texto === '') {
            // Exibe alerta se estiver vazio
            window.alert('Preencha o campo!');
            return;
        }
        
        // Cria um novo elemento para a tarefa
        const novaTarefa = document.createElement('li');
        
        // Define o conteúdo incluindo o texto e botão Remover
        novaTarefa.innerHTML = `
            <span>${texto}</span>
            <button class="btnRemover">Remover</button>
        `;
        
        // Adiciona a nova tarefa na lista
        listaTarefas.appendChild(novaTarefa);
        
        // Limpa o campo de texto após adicionar
        inputTarefa.value = '';
        
        // Foca novamente no campo de texto para facilitar nova digitação
        inputTarefa.focus();
        
        // Adiciona evento de clique no botão Remover
        const btnRemover = novaTarefa.querySelector('.btnRemover');
        btnRemover.addEventListener('click', function() {
            // Remove o elemento <li> pai do botão clicado
            novaTarefa.remove();
        });
    }
});