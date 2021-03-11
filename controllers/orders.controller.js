const sequelize = require("../conexion");

const getOrders = async (req, res) => {
  try {
    const result = await sequelize.query("SELECT * FROM Orders", {
      type: sequelize.QueryTypes.SELECT,
    });
    res.status(200).json({ result });
  } catch (err) {
    console.log(`error en el select ${err}`);
    res.status(400).json({ message: `Error ${err}` });
  }
};

/*const createOrder (
  const {
    username,
    name_surename,
    email,
    phone,
    adress,
    pass,
    id_rol,
  } = req.body;
)*/

exports.getOrders = getOrders;