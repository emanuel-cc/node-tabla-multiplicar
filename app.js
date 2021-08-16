const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//const base = 3;

// const [,,arg3 = "base=5"] = process.argv;
// const [, base = 1] = arg3.split("=");
console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then(mensaje =>{
        console.log(`${mensaje} creado`.rainbow);
    }).catch(err=>{
        console.log(`${err}`.red);
    });