'use strict';

// const fs = require('fs');
// const path = require('path');
// const basename = path.basename(__filename);
const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//const sequelize = require('../config/db.config');
const Usuario = require('./usuario');
const Habitacion = require('./Habitacion');
const Hotel = require('./hotel');
const Municipio = require('./municipio');
const Departamento =require('./departamento');
 
// Definir las asociaciones
Departamento.hasMany(Municipio, {
  foreignKey: 'departamento_id', // Clave foránea en el modelo Municipio
  sourceKey: 'id' // Clave primaria en el modelo Departamento
  ,as: 'municipios' // Define un alias para la asociación
});
 
Municipio.belongsTo(Departamento, {
  foreignKey: 'departamento_id', // Clave foránea en el modelo Municipio
  targetKey: 'id' // Clave primaria en el modelo Departamento
  ,as: 'departamento' // Define un alias para la asociación
});

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))
//     if (typeof model === 'function') {
//       db[model(sequelize, Sequelize.DataTypes).name] = model(sequelize, Sequelize.DataTypes);
//     }
//   }); 

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// Sincronizar modelos con la base de datos
sequelize.sync()
  .then(() => console.log("Modelos sincronizados"))
  .catch(err => console.error("Error al sincronizar modelos:", err));

module.exports = { Usuario, Hotel, Habitacion,Municipio,Departamento };