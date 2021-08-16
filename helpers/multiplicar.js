const fs = require("fs");
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, limit = 10)=>{
    let salida = "";
    let consola = "";

    for (let i = 0; i < limit; i++) {
        salida += `${base} x ${i+1} = ${base*(i+1)}\n`;
        consola += `${base} ${'x'.green} ${i+1} ${'='.green} ${base*(i+1)}\n`;
    }

    if(listar){
        console.log("=======================".green);
        console.log(`   Tabla del: ${colors.blue(base)}  `);
        console.log("=======================".green);
        console.log(salida);
    }

    try{
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        //console.log(`tabla-${base}.txt creado`);
        return `tabla-${base}.txt`;  
    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}