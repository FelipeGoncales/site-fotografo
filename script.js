// Ao carregar o site, adicionar todas as fotos do portfólio
document.addEventListener('DOMContentLoaded', function() {
    const secGaleria = document.getElementsByClassName('sec-galeria')[0];

    for (const dado of dados) {

        const div = document.createElement('div');
        div.classList.add('galeria-item');

        const img = document.createElement('img');
        img.classList.add('galeria-img')
        img.src = dado.img;
        img.addEventListener('click', abrirImagem);

        const texto = document.createElement('p');
        texto.classList.add('galeria-descricao');
        texto.textContent = dado.descricao;

        const categoria = document.createElement('p');
        categoria.classList.add('galeria-categoria');
        categoria.textContent = dado.categoria;

        const local = document.createElement('p');
        local.classList.add('galeria-local');
        local.textContent = dado.local;

        div.appendChild(img);
        div.appendChild(texto);
        div.appendChild(categoria);
        div.appendChild(local);

        secGaleria.appendChild(div);
    }
})

// Alterando a rolagem do scroll
const links = document.querySelectorAll('#nav-menu a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const elementPosition = (targetElement.getBoundingClientRect().top + window.scrollY) - 45;
        
        if (link === links[1]) {
            if (targetElement) {
                window.scrollTo({
                    top: elementPosition - 38
                });
            }
        } else {
            if (targetElement) {
                const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;

                window.scrollTo({
                    top: elementPosition - offset
                });
            }
        }
    });
});

// Enviar formulário
const submitButton = document.getElementById('button-submit'); 
const form = document.querySelector('form');
const text = document.getElementById('text-formulario-enviado');
const inputNome = document.getElementById('input-nome');
const inputEmail = document.getElementById('input-email');
const inputText = document.getElementById('input-textarea');

submitButton.addEventListener('click', function(event) {
    if (inputNome.checkValidity() && inputEmail.checkValidity() && inputText.checkValidity()) {
        text.textContent = 'Formulário enviado com sucesso!';

        inputNome.value = '';
        inputEmail.value = '';
        inputText.value = '';

        event.preventDefault();
    } else {
        text.textContent = 'Informações inválidas.';
    }
})  

// Abrir imagem em tela cheia
const divOverlay = document.getElementById('div-overlay');
const img = divOverlay.querySelector('img');

// Adicionando todos os endereços de imagem de uma lista
const imagens = [];
for (dado of dados) {
    imagens.push(dado.img)
}

function abrirImagem() {
    const divDisplay = window.getComputedStyle(divOverlay).getPropertyValue('display');

    if (divDisplay === 'none') {
        divOverlay.style.display = 'flex';
        img.src = this.src;
    }
}

// Passar para o lado direito
function imagemDireita() {
    let imgSrc;
    if (window.location.href === 'http://127.0.0.1:5500/index.html') {
        imgSrc = img.src.substring((window.location.href.length-10));
    } else {
        imgSrc = img.src.substring(window.location.href.length);
    }
    
    for (let indice in imagens) {
        indice = parseInt(indice);
        if (indice < imagens.length-1) {
            if (imagens[indice] === imgSrc) {
                img.src = imagens[indice+1];
            }
        }
    }
}

// Passar para o lado direito
function imagemEsquerda() {
    let imgSrc;
    if (window.location.href === 'http://127.0.0.1:5500/index.html') {
        imgSrc = img.src.substring((window.location.href.length-10));
    } else {
        imgSrc = img.src.substring(window.location.href.length);
    }

    for (let indice in imagens) {
        indice = parseInt(indice)
        if (indice > 0) {
            if (imagens[indice] === imgSrc) {
                img.src = imagens[indice-1]
            }
        }
    }
}

// Se clicar fora da imagem fecha
window.addEventListener('click', function(e) {
    if (e.target === divOverlay) {
        divOverlay.style.display = 'none'
    } 
})

// Fechar a imagem quando clicar no ícone de "x"
function fecharImagem() {
    const divOverlay = document.getElementById('div-overlay');

    divOverlay.style.display = 'none';
}