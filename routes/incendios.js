const express = require("express");
const router = express.Router();

const { ObtenerAlertas } = require("../controllers/incendios");

router.route("/").get(ObtenerAlertas);

module.exports = router;
