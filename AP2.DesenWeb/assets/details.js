function voltar() {
    window.location.href = 'main.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const jogadorId = urlParams.get('id');

    if (jogadorId) {
        if (sessionStorage.getItem('logado')) {
            buscarDetalhesDoJogador(jogadorId);
        } else {
            window.location.href = 'index.html';
        }
    } 
});

function buscarDetalhesDoJogador(id) {
    fetch(`https://botafogo-atletas.mange.li/all`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }
        return response.json();
    })
    .then(jogadores => {
        const jogador = jogadores.find(jogador => jogador.id === parseInt(id));
        if (!jogador) {
            throw new Error('Jogador não encontrado');
        }
        mostrarDetalhes(jogador);
    }) 
}

function mostrarDetalhes(jogador) {
    const detalhesContainer = document.getElementById('jogador-detalhes');
    detalhesContainer.innerHTML = `
        <div class='card'>
            <div class='imagem'>
                <img src="${jogador.imagem}" alt="foto de ${jogador.nome}">
            </div>
            <div class="container">
                <h2>${jogador.nome}</h2>
                <p><span>Posição</span>: ${jogador.posicao}</p>
                <p><span>Descrição</span>: ${jogador.descricao}</p>
                <p><span>Nascimento</span>: ${jogador.nascimento}</p>
                <button onclick="voltar()">Voltar</button>
            </div>
        </div>
    `;
}
