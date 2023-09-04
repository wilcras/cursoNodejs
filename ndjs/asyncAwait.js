async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`hola ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla.");
     //   reject("hay un error");
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`adios ${nombre}`);
      resolve();
    }, 1000);
  });
}

async function main() {
    let nombre = await hola ('caus');
    await hablar();
    await adios(nombre);
    console.log('terminado el proceso');
};


main();