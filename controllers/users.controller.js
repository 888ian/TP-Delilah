const sequelize = require("../conexion");

const getUsers = async (req, res) => {
  try {
    const result = await sequelize.query("SELECT * FROM Users", {
      type: sequelize.QueryTypes.SELECT,
    });
    res.status(200).json({ result });
  } catch (err) {
    console.log(`error en el select ${err}`);
    res.status(400).json({
      message: `Error ${err}`,
    });
  }
};

const createUser = async (req, res) => {
  const {username,name_surename,email,phone,adress,pass,id_rol,} = req.body;

  let arrayInsertUser = [`${username}`,`${name_surename}`,`${email}`,`${phone}`,`${adress}`,`${pass}`,`${id_rol}`,];

  try {

    const nuevoUsuario = await sequelize.query(
      "INSERT INTO users (username, name_surename, email, phone, adress, pass, id_rol) VALUES (?,?,?,?,?,?,?)",
      { replacements: arrayInsertUser, type: sequelize.QueryTypes.INSERT }
    );

    if (!nuevoUsuario) {
    res.status(400).json({message: "nuevoUsuario esta vacio" })
    }

    res.status(200).json({
      message: `usuario creado maquinola, tu username es ${username}`,
    });
  } catch (err) {
    if (err ==  "SequelizeUniqueConstraintError: Validation error") {
      res.status(201).json({message: "ese campo unico ya existe"})
    }
    //console.log(`error en la inserción ${err}`);
    res.status(200).json({message: "a ocurrido un error intentelo nuevamente"})
  }
};

exports.getUsers = getUsers;
exports.createUser = createUser;
