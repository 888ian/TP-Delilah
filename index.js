const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
const ordersRoute = require("./routers/orders.routes");
const productsRoutes = require("./routers/products.routes");
const usersRoutes = require("./routers/users.routes");

// Routes use
app.use("/api/orders", ordersRoute);
app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);

//Server
app.listen(PORT, () => {
  console.log(`Server started in the ${PORT}`);
});
