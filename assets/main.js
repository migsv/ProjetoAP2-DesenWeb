function sair() {
    window.location.href = 'index.html';
    sessionStorage.setItem('logado', 'false');
}

function buscarDados(endpoint) {
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cards-container');
        container.innerHTML = ''; 
        data.forEach(jogador => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${jogador.imagem}" alt="Foto de ${jogador.nome}">
                <div class="container">
                    <h2><b>${jogador.nome}</b></h2>
                    <p>Posição: ${jogador.posicao}</p>
                    <h4>Veja Mais</h4>
                </div>
            `;
            card.addEventListener('click', () => {
            window.location.href = `/ProjetoAP2-DesenWeb/details.html?id=${jogador.id}`;
`;
            });
            container.appendChild(card);
            
            setTimeout(() => {
                card.classList.add('visible');
            }, 100);
        });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));
}

document.addEventListener('DOMContentLoaded', () => buscarDados('https://botafogo-atletas.mange.li/all'));
