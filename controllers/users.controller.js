const sequelize = require("../conexion");

const getUsers = async (req, res) => {
  try {
    const result = await sequelize.query("SELECT * FROM Users", {
      type: sequelize.QueryTypes.SELECT,
    });
    res.status(200).json({ result });
  } catch (err) {
    console.log(`error en el select ${err}`);
    res.status(400).json({ message: `Error ${err}` });
  }
};

exports.getUsers = getUsers;
