const express = require('express');
const sectorCtrl = require('./../controllers/sector.controller');
const router = express.Router();

router.get('/', sectorCtrl.getSectores);
router.get('/:id', sectorCtrl.getSector);
router.post('/', sectorCtrl.createSector);
router.put('/:id', sectorCtrl.updateSector);
router.delete('/:id', sectorCtrl.deleteSector);

module.exports = router;
