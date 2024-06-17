// controllers/ticket.controller.js
const Ticket = require('../models/ticket');
const espectadorCtrl = require('./espectador.controller'); // Para reutilizar lógica si es necesario.
const ticketCtrl = {};

ticketCtrl.createTicket = async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json({
      status: '1',
      msg: 'Ticket guardado.'
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operación.'
    });
  }
};

ticketCtrl.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('espectador');
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error obteniendo los tickets.'
    });
  }
};

ticketCtrl.updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ticket) return res.status(404).json({ msg: 'Ticket no encontrado.' });
    res.status(200).json({
      status: '1',
      msg: 'Ticket actualizado.'
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operación.'
    });
  }
};

ticketCtrl.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).json({ msg: 'Ticket no encontrado.' });
    res.status(200).json({
      status: '1',
      msg: 'Ticket eliminado.'
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operación.'
    });
  }
};

ticketCtrl.getTicketsByCategoria = async (req, res) => {
  try {
    const tickets = await Ticket.find({ categoriaEspectador: req.params.categoria }).populate('espectador');
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error obteniendo los tickets.'
    });
  }
};

module.exports = ticketCtrl;
