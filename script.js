document.addEventListener('DOMContentLoaded', function() {

    const secGaleria = document.getElementsByClassName('sec-galeria')[0];

    for (const dado of dados) {

        const div = document.createElement('div');
        div.classList.add('galeria-item');

        const img = document.createElement('img');
        img.classList.add('galeria-img')
        img.src = dado.img;

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