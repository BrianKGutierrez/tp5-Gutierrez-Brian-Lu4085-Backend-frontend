const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller');

// Rutas para manejar las operaciones CRUD de Ticket
router.get('/', ticketController.getTickets);
router.get('/:id', ticketController.getTicketById);
router.get('/category/:categoria', ticketController.getTicketByCategory);
router.post('/', ticketController.addTicket);
router.put('/:id', ticketController.updateTicket);
router.delete('/:id', ticketController.removeTicket);

module.exports = router;
