const express = require("express");
const conexion = require("./database/conexion");
require("dotenv").config();
const incendios = require("./routes/incendios");

app = express();

app.use(express.json());
app.use("/api/v1/incendios", incendios);

const start = async () => {
  try {
    await conexion(process.env.MONGO_URI);
    app.listen(process.env.PORT || 8000, () =>
      console.log(`Server is listening on port 8000...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
