function saludar(saludarFuncion){
    saludarFuncion();
}

const saludoInternacional =function(){
    console.log("Hola mundo");
}


const saludomexicano = function (){
    console.log("Quihubole!");
}

saludar(saludoInternacional);
saludar(saludomexicano);