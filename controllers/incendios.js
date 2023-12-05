const Incendios = require("../models/incendios");

const ObtenerAlertas = async (req, res) => {
  try {
    const icv = await Incendios.find({});
    res.status(200).json({ icv });
  } catch (err) {
    res.status(500).json({ status: "failed", msg: err });
  }
};

module.exports = { ObtenerAlertas };
