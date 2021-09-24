const fs = require('fs');
let color = require('colors');
const crearArchivo = async (base = 5, limite, listar) =>{

    try {
        let salida = '';
        let texto = '';
        for (let x=1; x<=limite; x++){
            texto=texto+(`${base}`+`x`+`${x}`+ `=`+ `${base*x}`+`\n`);
            salida=salida+(`${base}`.red+`x`+`${x}`.red+ `=`+ `${base*x}`.green+ `\n`);
        }
        
        if (listar){
            console.log('============================');
            console.log( `Tabla del ${base}`.red);
            console.log('============================');
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, texto);
        
        return `tabla-${base}.txt fue creado con éxito`.rainbow;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}