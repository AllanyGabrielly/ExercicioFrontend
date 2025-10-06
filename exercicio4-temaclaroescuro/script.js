// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os elementos do DOM:
    const body = document.getElementById('body');
    const imagemTema = document.getElementById('imagemTema');
    const btnAlternarTema = document.getElementById('btnAlternarTema');
    
    // Adiciona um listener de clique ao botão
    btnAlternarTema.addEventListener('click', function() {
        // Alterna a classe tema-escuro no body
        const temaEscuroAtivo = body.classList.toggle('tema-escuro');
        
        // Verifica se o tema escuro está ativo
        if (temaEscuroAtivo) {
            // Altera a imagem para lua
            imagemTema.src = 'https://cdn-icons-png.flaticon.com/512/740/740878.png';
            imagemTema.alt = 'Lua';
            
            // Atualiza o texto do botão
            btnAlternarTema.textContent = 'Alternar para Tema Claro';
            
            // Aplica estilos do tema escuro
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
            btnAlternarTema.style.borderColor = 'white';
            btnAlternarTema.style.backgroundColor = 'black';
            btnAlternarTema.style.color = 'white';
        } else {
            // Restaura a imagem do sol
            imagemTema.src = 'https://cdn-icons-png.flaticon.com/512/869/869869.png';
            imagemTema.alt = 'Sol';
            
            // Restaura o texto original do botão
            btnAlternarTema.textContent = 'Alternar para Tema Escuro';
            
            // Aplica estilos do tema claro
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            btnAlternarTema.style.borderColor = 'black';
            btnAlternarTema.style.backgroundColor = 'white';
            btnAlternarTema.style.color = 'black';
        }
        
        // Log para debug
        console.log('Tema alterado:', temaEscuroAtivo ? 'Escuro' : 'Claro');
    });
});