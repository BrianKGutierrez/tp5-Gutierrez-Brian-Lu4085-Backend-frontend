// controllers/espectador.controller.js
const Espectador = require('../models/espectador');
const espectadorCtrl = {};

espectadorCtrl.createEspectador = async (req, res) => {
  try {
    const espectador = new Espectador(req.body);
    await espectador.save();
    res.status(201).json({
      status: '1',
      msg: 'Espectador guardado.'
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operación.'
    });
  }
};

espectadorCtrl.getEspectadores = async (req, res) => {
  try {
    const espectadores = await Espectador.find();
    res.status(200).json(espectadores);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error obteniendo los espectadores.'
    });
  }
};

espectadorCtrl.getEspectador = async (req, res) => {
  try {
    const espectador = await Espectador.findById(req.params.id);
    if (!espectador) return res.status(404).json({ msg: 'Espectador no encontrado.' });
    res.status(200).json(espectador);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error obteniendo el espectador.'
    });
  }
};

module.exports = espectadorCtrl;
