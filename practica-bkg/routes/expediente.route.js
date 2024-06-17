//defino controlador para el manejo de CRUD
const expedienteCtrl = require('../controllers/expediente.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de expediente
router.get('/', expedienteCtrl.getExpedientes);
router.post('/', expedienteCtrl.createExpediente);
router.get('/:id', expedienteCtrl.getExpediente);
router.put('/:id', expedienteCtrl.editExpediente);
router.delete('/:id', expedienteCtrl.deleteExpediente);
//exportamos el modulo de rutas
module.exports = router;