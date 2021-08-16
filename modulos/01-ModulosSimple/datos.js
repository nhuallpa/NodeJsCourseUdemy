var url = 'http://google.com';

function dato(mensaje) {
    console.log(mensaje)
}

//funcion privada no exportada
function leer(){

}

// exportar para que sean publicas
module.exports.log = dato
module.exports.url = url

// Como quedo declaro el modulo
//console.log(module)