// controllers/transaction.controller.js
const Transaction = require('../models/transaction');

const transactionCtrl = {};

transactionCtrl.createTransaction = async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    await transaction.save();
    res.status(200).json({ status: '1', msg: 'Transaction saved' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error processing request' });
  }
};

transactionCtrl.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error fetching transactions' });
  }
};

transactionCtrl.getTransactionsByEmail = async (req, res) => {
  try {
    const transactions = await Transaction.find({ emailCliente: req.params.email });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error fetching transactions by email' });
  }
};

transactionCtrl.getTransactionsByCurrency = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      monedaOrigen: req.params.monedaOrigen,
      monedaDestino: req.params.monedaDestino
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error fetching transactions by currency' });
  }
};

module.exports = transactionCtrl;
