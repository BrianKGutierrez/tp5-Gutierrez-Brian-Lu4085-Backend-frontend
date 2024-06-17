// routes/transaction.route.js
const express = require('express');
const router = express.Router();
const transactionCtrl = require('../controllers/transaction.controller.js');

router.post('/', transactionCtrl.createTransaction);
router.get('/', transactionCtrl.getTransactions);
router.get('/email/:email', transactionCtrl.getTransactionsByEmail);
router.get('/currency/:monedaOrigen/:monedaDestino', transactionCtrl.getTransactionsByCurrency);

module.exports = router;
