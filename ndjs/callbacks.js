function hola(nombre,miCallback) {
    setTimeout(() => {
        console.log(`hola ${nombre}`);
        miCallback(nombre);
    }, 1000);
};

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`adios ${nombre}`);
        otroCallback();
    }, 1000);
}


console.log('pricipio');
hola('clarense',(nombre)=>{
    adios(nombre,()=>{
        console.log("fin del proceso");
    })
});
