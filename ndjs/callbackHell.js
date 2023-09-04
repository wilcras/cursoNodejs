function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log(`hola ${nombre}`);
    miCallback(nombre);
  }, 1000);
}
function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('bla bla bla.');
        callbackHablar();
    }, 1000);
}
 function conversacion (nombre, veces, callback) {
    if (veces > 0 ) {
        hablar(()=>{
            conversacion(nombre, --veces, callback);
        })
    }else{
        adios(nombre, function(){
            console.log(`terminando el proceso`);
        })
    }
 }

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log(`adios ${nombre}`);
    otroCallback();
  }, 1000);
}

//----------------------------------
console.log("pricipio");
hola('clarense', function(nombre){
    conversacion(nombre, 4, function(){
        console.log(`proceso terminado`);
    })
})
// hola('clarense',(nombre)=>{
//     hablar(()=> {
//         hablar(()=>{
//             adios(nombre,()=>{
//                 console.log("fin del proceso");
//             });
//         });
//     });
// });

