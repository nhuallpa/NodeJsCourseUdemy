const path = require('path'); // modulo sistema path
const os = require('os');  // modulo sistema operativo
const fs = require('fs'); // modulo para file system
const EventEmitter = require('events');
const http = require('http');


const objPath = path.parse(__filename);
console.log(objPath);

var memoriaLibre = os.freemem()
var memoriaTotal = os.totalmem()

console.log(`Memoria libre: ${memoriaLibre}`);
console.log(`Memoria total:  ${memoriaLibre}`);

const archivos = fs.readdirSync('./');
console.log('Resultado de forma sincronos', archivos);

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Resultado de forma asincrona', files);
})

// Pruebas con Eventos Eventos
const emitter = new EventEmitter();

// Registrar listener
emitter.on('mensajeLoger', args => {
    console.log('Listener llamado', args)
});

// Registrar evento
emitter.emit('mensajeLoger', {id:1, url:'http://prueba'});


/// Ejemplo de servidore simples
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Hola Mundo');
        res.end();
    }

    if (req.url === '/api/productos') {
        res.write(JSON.stringify(['mousee', 'teclado']));
        res.end();
    }

});

server.listen(3000)

console.log('Listening on port 3000')