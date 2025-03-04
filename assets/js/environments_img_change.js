const imagesNatural = [
    "../assets/img/enviroments/natural/natural-1.jpeg",
    "../assets/img/enviroments/natural/natural-2.jpeg",
    "../assets/img/enviroments/natural/natural-3.jpeg",
    "../assets/img/enviroments/natural/natural-4.jpeg",
    "../assets/img/enviroments/natural/natural-5.png",
    "../assets/img/enviroments/natural/natural-6.png"
];

const imagesSocial = [
    "../assets/img/enviroments/social/social-1.jpeg",
    "../assets/img/enviroments/social/social-2.jpeg",
    "../assets/img/enviroments/social/social-3.jpeg",
    "../assets/img/enviroments/social/social-4.jpeg",
    "../assets/img/enviroments/social/social-5.jpeg",
    "../assets/img/enviroments/social/social-6.jpeg"
];

const imagesParty = [
    "../assets/img/enviroments/party/party-1.jpeg",
    "../assets/img/enviroments/party/party-2.jpeg",
    "../assets/img/enviroments/party/party-3.jpeg",
    "../assets/img/enviroments/party/party-4.jpeg",
    "../assets/img/enviroments/party/party-5.jpeg",
    "../assets/img/enviroments/party/party-6.jpeg"
]

const imagesPaleo = [
    "../assets/img/enviroments/palentology/paleo-1.jpeg",
    "../assets/img/enviroments/palentology/paleo-2.jpeg",
    "../assets/img/enviroments/palentology/paleo-3.jpeg",
    "../assets/img/enviroments/palentology/paleo-4.jpeg",
    "../assets/img/enviroments/palentology/paleo-5.jpeg",
    "../assets/img/enviroments/palentology/paleo-6.jpeg"
];

const imagesGarden = [
    "../assets/img/enviroments/garden/garden-1.jpeg",
    "../assets/img/enviroments/garden/garden-2.jpeg",
    "../assets/img/enviroments/garden/garden-3.jpeg"
];

// Función para cambiar imágenes de un entorno
function changeImage(environmentId, imagesArray) {
    let currentImageIndex = 0;

    document.getElementById(environmentId).addEventListener('click', function() {
        let img = this.querySelector('img');
        currentImageIndex = (currentImageIndex + 1) % imagesArray.length; // Ciclo de imágenes
        img.src = imagesArray[currentImageIndex];
    });
}

// Cambiar imágenes para cada entorno
changeImage('changing_imageNatural', imagesNatural);
changeImage('changing_imageSocial', imagesSocial);
changeImage('changing_imageParty', imagesParty);
changeImage('changing_imagePaleo', imagesPaleo);
changeImage('changing_imageGarden', imagesGarden);
