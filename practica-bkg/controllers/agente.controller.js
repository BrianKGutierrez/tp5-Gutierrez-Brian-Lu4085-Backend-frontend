const Agente = require('../models/agente');//aqui me esta tomando los datos del models
const agenteCtrl = {}
agenteCtrl.getAgentes = async (req, res) => {//el requeste me dice que recibo y que respondo
    filter={}
    if(req.query.estado !=null && req.query.estado!==""){
        filter.estado=req.query.estado
    }
    // if(req.query.nombre!=null && req.query.nombre!=""){
    //     filter.nombre=req.query.nombre
    // }este podria ser otro filtro mas
    var agentes = await Agente.find(filter);//los documentos recuperados del models se guardan en la variableagente find busca algo y si no la encuentr ME DEVUELVE TODO (await significa que espera algo del array, quizas esto cargue y demore mas cuando las base de datos esta sobrecaragada, sin el await funcionaria pero sino rsponde rapido me devolceria un objeto vacio siendo que existe algun datto esxitente).. y en en find me filtra los agente con segun el valor de la variable que vaa tomar datos como parametros
    res.status(200).json(agentes);//y devuelve la variable agente
}
agenteCtrl.createAgente = async (req, res) => {//este metoodo es asincrono  nos interese el requeste porque recibe el  body, la variabless de model
var agente = new Agente(req.body);//aributos
try {
await agente.save();
res.json({
'status': '1',
'msg': 'Agente guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}
agenteCtrl.getAgente = async (req, res) => {
const agente = await Agente.findById(req.params.id);
res.json(agente);
}
agenteCtrl.editAgente = async (req, res) => {
const vagente = new Agente(req.body);
try {
await Agente.updateOne({_id: req.body._id}, vagente);// el req me pide el id del agente y despues me vagente me devuelve el agente correspondiente del arrat de agentes 
res.json({
'status': '1',
'msg': 'Agente updated'
}) 
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
}) 
}
}
agenteCtrl.deleteAgente = async (req, res)=>{
try {
await Agente.deleteOne({_id: req.params.id});
res.json({
status: '1',
msg: 'Agente removed'
}) 
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
}) 
}

}
module.exports = agenteCtrl;

