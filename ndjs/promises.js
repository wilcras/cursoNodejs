function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`hola ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
} 

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla.");
    //   resolve(nombre);
    reject('hay un error')
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`adios ${nombre}`);
      resolve();
    }, 1000);
  });
}

// ----
console.log("iniciando el proceso");
hola("clarense")
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("terminado el proceso");
  })
  .catch(error =>{
    console.error('Ha habido un error');
    console.error(error);
  })


// adios("clarense")
//   .then(adios)
//   .then((nombre) => {
//     console.log("ejecucion del adios");
//   });
