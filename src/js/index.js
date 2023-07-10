// passo 1 - pegar os personagens no js pra poder verificar
//quando o usuario passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionada no personagem que o usuario passar o cursor do mouse

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {window.scrollTo({top: 0, behavior: 'smooth'});
    }

        // passo 3 - verificar se ja existe um personagem selecionado, se sim devemos remover a seleção dele

        removerSelecaoDoPersonagem();

        
        personagem.classList.add('selecionado');

        

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        //passo 1 - pegar o elemento do personage grande pra adicionar as informações nele

        alterarImgPersonagem(personagem);

        // passo 3 - alterar nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 - alterar descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        

    })
})

function alterarImgPersonagem(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    // passo 2 - alterar a imagem personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

