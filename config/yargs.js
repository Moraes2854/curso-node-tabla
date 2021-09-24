const argv = require('yargs')
.option('b',{
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla'
})
.option('l',{
    alias:'listar',
    type: 'boolean',
    default: false,
    describe: 'Lista la tabla'
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Tamaño de la tabla'
})
.check((argv, options) => {
    if (isNaN(argv.b)) throw 'La base tiene que ser un número';
    if (isNaN(argv.h)) throw 'Hasta tiene que ser un número';
    if (typeof argv.l != "boolean") throw 'Listar tiene que ser boolean';  
    return true;
})
.argv;

module.exports = argv;
