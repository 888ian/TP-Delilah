const sequelize = require("../conexion");

const getProducts = async (req, res) => {
  try {
    const result = await sequelize.query("SELECT * FROM Products", {
      type: sequelize.QueryTypes.SELECT,
    });
    res.status(200).json({ result });
  } catch (err) {
    console.log(`error en el select ${err}`);
    res.status(400).json({ message: `Error ${err}` });
  }
};

exports.getProducts = getProducts;
