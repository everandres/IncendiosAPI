const express = require("express");
const router = express.Router();

const {
  ObtenerAlertas,
  AlertasIncendios,
} = require("../controllers/incendios");

router.route("/").get(AlertasIncendios);

module.exports = router;
