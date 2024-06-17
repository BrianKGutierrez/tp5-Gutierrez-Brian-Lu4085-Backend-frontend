const Sector = require('./../models/sector');
const sectorCtrl = {};

// Obtener todos los sectores
sectorCtrl.getSectores = async (req, res) => {
    try {
        const sectores = await Sector.find().populate("responsable");
        res.status(200).json(sectores);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error obteniendo los sectores.'
        });
    }
};

// Crear un nuevo sector
sectorCtrl.createSector = async (req, res) => {
    const sector = new Sector(req.body);
    try {
        await sector.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Sector guardado.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación.'
        });
    }
};

// Actualizar un sector
sectorCtrl.updateSector = async (req, res) => {
    const vsector = new Sector(req.body);
    try {
        await Sector.updateOne({ _id: req.body._id }, vsector);
        res.status(200).json({
            'status': '1',
            'msg': 'Sector actualizado.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación.'
        });
    }
};

// Eliminar un sector
sectorCtrl.deleteSector = async (req, res) => {
    try {
        await Sector.deleteOne({ _id: req.params.id });
        res.status(200).json({
            'status': '1',
            'msg': 'Sector eliminado.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.'
        });
    }
};

// Obtener un sector por ID
sectorCtrl.getSector = async (req, res) => {
    try {
        const sector = await Sector.findById(req.params.id).populate("responsable");
        res.status(200).json(sector);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error obteniendo el sector.'
        });
    }
};

module.exports = sectorCtrl;
