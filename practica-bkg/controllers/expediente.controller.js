const Expediente = require('../models/expediente');//aqui me esta tomando los datos del models
const expedienteCtrl = {}
expedienteCtrl.getExpedientes = async (req, res) => {//el requeste me dice que recibo y que respondo
var expedientes = await Expediente.find();//los documentos recuperados del models se guardan en la variableagente find busca algo y si no la encuentr ME DEVUELVE TODO (await significa que espera algo del array, quizas esto cargue y demore mas cuando las base de datos esta sobrecaragada, sin el await funcionaria pero sino rsponde rapido me devolceria un objeto vacio siendo que existe algun datto esxitente)
res.json(expedientes);//y devuelve la variable agente
}
expedienteCtrl.createExpediente = async (req, res) => {//este metoodo es asincrono  nos interese el requeste porque recibe el  body, la variabless de model
var expediente = new Expediente(req.body);//aributos
try {
await expediente.save();
res.json({
'status': '1',
'msg': 'Expediente guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}
expedienteCtrl.getExpediente = async (req, res) => {
    const expediente = await Expediente.findById(req.params.id);
    res.json(expediente);
    }
expedienteCtrl.editExpediente = async (req, res) => {
    const vexpediente = new Expediente(req.body);
    try {
    await Expediente.updateOne({_id: req.body._id}, vexpediente);// el req me pide el id del agente y despues me vagente me devuelve el agente correspondiente del arrat de agentes 
    res.json({
    'status': '1',
    'msg': 'Expediente actualizado'
    }) 
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    }) 
    }
    }

expedienteCtrl.deleteExpediente = async (req, res)=>{
try {
await Expediente.deleteOne({_id: req.params.id});
res.status(200).json({
status: '1',
msg: 'Expediente removed'
}) 
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
}) 
} 
 
}
module.exports = expedienteCtrl;

