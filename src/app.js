const {envs} = require('./config/env');
const {startServer} = require('./server/server');

const main = () => {
  console.log(envs);
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  
  });
};

//funcion agnostica autoconvocada
//agnostica por que no tiene nombre
//autoconvocada por que la ejecutamos con parentesis al final

(async() => {
  main();
})()