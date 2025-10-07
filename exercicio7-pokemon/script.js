// Aguarda o DOM carregar 
document.addEventListener('DOMContentLoaded', function() {
    
    // Consulta DOM
    const btnGerarPokemon = document.getElementById('btnGerarPokemon');
    const pokemonInfo = document.getElementById('pokemonInfo');
    
    // Evento de clique no botão Gerar Pokémon
    btnGerarPokemon.addEventListener('click', function() {
        // Chama a função para buscar um Pokémon aleatório
        buscarPokemonAleatorio();
    });
    
    // Função assíncrona para buscar um Pokémon
    async function buscarPokemonAleatorio() {
        // Gera um ID aleatório
        const idAleatorio = Math.floor(Math.random() * 898) + 1;
        
        // Faz uma requisição usando fetch
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`);
        
        // Converte a resposta para json
        const pokemon = await resposta.json();
        
        // Exibe as informações do Pokémon na página
        exibirPokemon(pokemon);
    }
    
    // Função para exibir as informações do Pokémon
    function exibirPokemon(pokemon) {
        // Converte o nome para letras maiúsculas
        const nomeMaiusculo = pokemon.name.toUpperCase();
        
        // Obtém os tipos do Pokémon
        const tipos = pokemon.types.map(tipoInfo => tipoInfo.type.name).join(', ');
        
        // Obtém a URL da imagem
        const imagemUrl = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
        
        // Cria o HTML para exibir as informações
        const htmlPokemon = 
            `<h2>${nomeMaiusculo}</h2>
            <img src="${imagemUrl}" alt="${nomeMaiusculo}" style="width: 200px; height: 200px;">
            <p><strong>Tipo:</strong> ${tipos}</p>`;
        
        // Atualiza o conteúdo HTML da div pokemonInfo
        pokemonInfo.innerHTML = htmlPokemon;
    }
    
    // Busca um Pokémon aleatório automaticamente ao carregar a página
    buscarPokemonAleatorio();
});