// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Consulta DOM 
    const campoTexto = document.getElementById('campoTexto');
    const contador = document.getElementById('contador');
    
    // Define o valor máximo de caracteres
    const maxCaracteres = 200;
    
    // Função para atualizar o contador em tempo real
    function atualizarContador() {
        // Obtém o texto digitado e calcula o comprimento
        const texto = campoTexto.value;
        const quantidade = texto.length;
        
        // Atualiza o textContent do contador
        contador.textContent = `${quantidade}/${maxCaracteres} caracteres`;
        
        // Verifica se atingiu o limite máximo
        if (quantidade >= maxCaracteres) {
            // Muda a cor para vermelho se atingiu o limite
            contador.style.color = 'red';
            
            // Impede que digite mais caracteres
            campoTexto.value = texto.substring(0, maxCaracteres);
        } else {
            // Mantém a cor padrão se está dentro do limite
            contador.style.color = 'black';
        }
    }
    
    // O evento input é disparado sempre que o valor do campo muda
    campoTexto.addEventListener('input', atualizarContador);
    
    // Chama a função uma vez para inicializar o contador
    atualizarContador();
});