let amigos = [];

function agregarAmigo(){
    let inputNombre = document.getElementById('amigo'); // Obtener el input
    let nombre = inputNombre.value.trim();
    if(nombre){
        amigos.push(nombre);
        inputNombre.value ='';
        inputNombre.focus();

    }else{
        alert('Ingresa un nombre, dejaste la cadena vacia');
    }
    imprimir(nombre);
}

function imprimir(nombre){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(nombre => {
        let nuevoElemento = document.createElement('li'); // Crear un <li>
        nuevoElemento.textContent = nombre; // Asignar el texto del nombre al <li>
        lista.appendChild(nuevoElemento); // Agregar el <li> a la lista <ul>
    });
}

function sortearAmigo(){
    if(amigos.length>0){
        let amigoSecreto = Math.floor(Math.random()*amigos.length);
        let lista = document.getElementById("resultado");
        lista[amigoSecreto];
        lista.innerHTML = `El amigo secreto es: ${amigos[amigoSecreto]}`;
        let limpiarLista = document.getElementById('listaAmigos');
        limpiarLista.innerHTML='';
    }else{
        alert('No has ingresado ningun amigo!');

    }
    
}
