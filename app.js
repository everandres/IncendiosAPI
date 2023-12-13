const express = require("express");
const { conexion, pool } = require("./database/conexion");
require("dotenv").config();
const incendios = require("./routes/incendios");

app = express();

app.use(express.json());
app.use("/api/v1/incendios", incendios);

app.listen(8000, () => {
  console.log("Servidor escuchando");
});
