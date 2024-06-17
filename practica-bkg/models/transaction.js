// models/transaction.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  monedaOrigen: { type: String, required: true },
  cantidadOrigen: { type: Number, required: true },
  monedaDestino: { type: String, required: true },
  cantidadDestino: { type: Number, required: true },
  emailCliente: { type: String, required: true },
  tasaConversion: { type: Number, required: true }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
