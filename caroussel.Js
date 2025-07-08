function caroussel(nb){

    let container = document.createElement('div');
    container.classList.add('container');

    let imagecontainer = document.createElement('div');
    imagecontainer.classList.add('imagecontainer');
    container.appendChild(imagecontainer);

    let nbimage = nb;
    let images = [];

        for (let i = 0; i < nbimage; i++) {
            images.push('imgs/image' + i + ".jpg");
        }

    let imgElements = []; 

        for (let i = 0; i < images.length; i++) {
            let img = document.createElement('img');
            img.src = images[i];
            imagecontainer.appendChild(img); 
            imgElements.push(img);           
        }
    document.body.appendChild(container);

    let button = document.createElement('button');
    let buttonTexte = document.createTextNode('Défiler');
    button.appendChild(buttonTexte);
    button.classList.add('buttonCaroussel');
    document.body.appendChild(button);

    let indexActuel = 0;
        function updateImages() {
            for (let i = 0; i < imgElements.length; i++) {
                if (i === indexActuel) {
                    imgElements[i].classList.remove('hidden');
                } else {
                    imgElements[i].classList.add('hidden');
                }
        }}
    updateImages();

    button.addEventListener('click', () => {
        if (indexActuel === images.length - 1) {
            indexActuel = 0;
        } else {
            indexActuel++;
        }
        updateImages();
    });
}



