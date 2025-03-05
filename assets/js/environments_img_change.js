// Cargar el archivo JSON que contiene las imágenes
fetch('assets/json/images_envronimient.json')
  .then(response => response.json())
  .then(images => {
    // Función para cambiar imágenes de un entorno
    function changeImage(environmentId, imagesArray) {
      let currentImageIndex = 0;

      document.getElementById(environmentId).addEventListener('click', function() {
        let img = this.querySelector('img');
        currentImageIndex = (currentImageIndex + 1) % imagesArray.length; // Ciclo de imágenes
        img.src = imagesArray[currentImageIndex];
      });
    }

    // Cambiar imágenes para cada entorno usando el archivo JSON
    changeImage('changing_imageNatural', images.natural);
    changeImage('changing_imageSocial', images.social);
    changeImage('changing_imageParty', images.party);
    changeImage('changing_imagePaleo', images.paleo);
    changeImage('changing_imageGarden', images.garden);
  })

  .catch(error => console.error('Error cargando el archivo JSON:', error));
