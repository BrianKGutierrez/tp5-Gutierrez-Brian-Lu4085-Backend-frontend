// routes/espectador.route.js
const express = require('express');
const router = express.Router();
const espectadorCtrl = require('../controllers/espectador.controller.js');


router.post('/', espectadorCtrl.createEspectador);
router.get('/', espectadorCtrl.getEspectadores);
router.get('/:id', espectadorCtrl.getEspectador);

module.exports = router;
