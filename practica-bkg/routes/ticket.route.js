// routes/ticket.route.js
const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticket.controller');

router.post('/', ticketCtrl.createTicket);
router.get('/', ticketCtrl.getTickets);
router.put('/:id', ticketCtrl.updateTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.get('/categoria/:categoria', ticketCtrl.getTicketsByCategoria);

module.exports = router;
