// config/database.js
const { Sequelize } = require('sequelize');
const config = require('./config.json');

//Configuración de conexión a la base de datos
const sequelize = new Sequelize('hotel','admin', 'Kjt&30_DB', {
    host: '127.0.0.1', // Cambia el host si tu servidor de base de datos está en otro lado
    dialect:'mysql',
    port: config.development.port,
    logging: false, // Desactiva el log de consultas si prefieres que no se vean en la consola
});

module.exports = sequelize;