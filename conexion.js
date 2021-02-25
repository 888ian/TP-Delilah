const Sequelize = require("sequelize");
const path = "mysql://root:789123@localhost:3306/Delilah";
const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado.");
  })
  .catch((err) => {
    console.error("Error de conexion:", err);
  });

module.exports = sequelize;
