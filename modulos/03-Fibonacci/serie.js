const fs = require('fs');
let crearSerie = (cantidad) => {
    return new Promise((resolve, rejected) => {
        let fibo1 = 1;
        let fibo2 = 1;
        let serie = '';
    
        serie += `${fibo1}\t`;
        for(let i=2; i<cantidad; i++) {
            serie += `${fibo2}\t` 
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
        }
    
        fs.writeFile('fibonacchi.txt', serie, (err) => {
            if (err) rejected('El archivo se creo con éxito');
            else resolve('El archivo se creo con éxito');
        })
    
    });
}
    

module.exports = {
    crearSerie
}
