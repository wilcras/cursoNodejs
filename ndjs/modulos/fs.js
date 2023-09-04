const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}
function escribir (ruta,contenido,cb ) {
    fs.writeFile(ruta,contenido,(err)=>{
        if(err){
            console.error('no he escrito nada ',err);
        }else{
            console.log('escrito el archivo');
        }
    })
}

function borrar(ruta,cb) {
    fs.unlink(ruta,cb);
    
}

//-----------
borrar(__dirname +'/archivo1.txt',(err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted')})
// escribir(__dirname + '/archivo1.txt','esto es un nuevo archivo',console.log);
// leer(__dirname +'/archivo1.txt', console.log);
