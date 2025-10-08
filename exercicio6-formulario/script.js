// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Consulta DOM
    const formSorteio = document.getElementById('formSorteio');
    const inputQuantidade = document.getElementById('quantidade');
    const inputMinimo = document.getElementById('minimo');
    const inputMaximo = document.getElementById('maximo');
    const resultado = document.getElementById('resultado');
    
    // Evento de submit do formulário
    formSorteio.addEventListener('submit', function(event) {
        // Previne recarregar a página
        event.preventDefault();
        
        // Obtém os valores dos campos e converte para Number
        const quantidade = Number(inputQuantidade.value);
        const minimo = Number(inputMinimo.value);
        const maximo = Number(inputMaximo.value);
        
        // Valida se os valores são válidos
        if (minimo >= maximo) {
            window.alert('O valor mínimo deve ser menor que o valor máximo!');
            return;
        }
        
        // Calcula o intervalo disponível
        const intervalo = maximo - minimo + 1;
        
        // Valida se é possível sortear a quantidade solicitada sem repetição
        if (quantidade > intervalo) {
            window.alert(`Não é possível sortear essa quantidade`);
            return;
        }
        
        // Realiza o sorteio dos números
        const numerosSorteados = sortearNumeros(quantidade, minimo, maximo);
        
        // Exibe o resultado
        exibirResultado(numerosSorteados);
    });
    
    // Função para sortear números sem repetição
    function sortearNumeros(quantidade, minimo, maximo) {
        // Array para armazenar os números sorteados
        const sorteados = [];
        
        // Continua sorteando até ter a quantidade desejada
        while (sorteados.length < quantidade) {
            const numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
            
            // Verifica se o número já foi sorteado (evita repetição)
            if (!sorteados.includes(numeroSorteado)) {
                // Adiciona o número ao array usando push
                sorteados.push(numeroSorteado);
            }
        }
        
        return sorteados;
    }
    
    // Função para exibir o resultado na página
    function exibirResultado(numeros) {
        // Ordena os números em ordem crescente
        numeros.sort((a, b) => a - b);
        
        // Cria uma string com os números formatados
        let textoResultado = '<strong>Números sorteados: </strong><br>';
        textoResultado += numeros.join(', ');
        
        // Atualiza o conteúdo HTML da div resultado
        resultado.innerHTML = textoResultado;
    }
});
