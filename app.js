const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');

lugar.getLugar(argv.direccion)
    .then(console.log('----------------------------------------'))


/* console.log(argv.direccion); */