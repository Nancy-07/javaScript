function abrirRegalo(event){
    
    const image = event.currentTarget;
    image.src = 'https://giphy.com/gifs/happy-birthday-feliz-cumple-cumplanos-7NpSWoebkmJuryOWOG';
    
    const mensaje = document.querySelector('h1');
    mensaje.textContent = 'Felicidades';

    image.removeEventListener('click',abrirRegalo)
}

