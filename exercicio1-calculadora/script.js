// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Consulta DOM para obter elementos
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const operacaoSelect = document.getElementById('operacao');
    const calcularBtn = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');

    // Adiciona evento de click ao botão calcular
    calcularBtn.addEventListener('click', function() {
        // Obtém valores dos inputs (convertendo para Number)
        const num1 = Number(numero1Input.value);
        const num2 = Number(numero2Input.value);
        const operacao = operacaoSelect.value;
        
        let resultado;

        // Switch para verificar a operação selecionada
        switch(operacao) {
            case 'adicao':
                resultado = num1 + num2;
                break;
            case 'subtracao':
                resultado = num1 - num2;
                break;
            case 'multiplicacao':
                resultado = num1 * num2;
                break;
            case 'divisao':
                // Verifica divisão por zero
                if(num2 === 0) {
                    resultado = 'Erro: Divisão por zero!';
                } else {
                    resultado = num1 / num2;
                }
                break;
            case 'potencia':
                // Usa Math.pow para potência
                resultado = Math.pow(num1, num2);
                break;
            case 'raiz':
                // Usa Math.sqrt para raiz quadrada (usa apenas o primeiro número)
                resultado = Math.sqrt(num1);
                break;
            default:
                resultado = 'Operação inválida';
        }

        // CORREÇÃO: Forma correta de usar template string
        resultadoDiv.textContent = 'Resultado: ' + resultado;
    });
});