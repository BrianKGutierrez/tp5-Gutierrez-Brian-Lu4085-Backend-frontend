const mongoose = require('mongoose');
const {Schema} = mongoose;
const ExpedienteSchema = new Schema({
 numero: {type: Number, required: true},
 anio: {type: Number, required: true},
 descripcion: {type:String, required: true},
 archivado: {type: Boolean, required: true}
})
module.exports = mongoose.models.Expediente  || mongoose.model('Expediente', ExpedienteSchema);
 