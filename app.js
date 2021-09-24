const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();



 crearArchivo(argv.base, argv.h ,argv.listar)
     .then(nombreArchivo => console.log(nombreArchivo))
     .catch(err => console.log(err));