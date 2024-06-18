const Ticket = require('../models/ticket');

// Obtener todos los tickets
const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find().populate('espectador');
        res.json(tickets);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Obtener ticket por ID
const getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id).populate('espectador');
        if (!ticket) {
            return res.status(404).send('Ticket no encontrado');
        }
        res.json(ticket);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getTicketByCategory = async (req, res) => {
    try {
      const categoria = req.query.categoria; // Changed from req.params.categoria to req.query.categoria
      let query = { categoriaEspectador: categoria };
  
      const tickets = await Ticket.find(query).populate('espectador');
      
      if (!tickets.length) {
        return res.status(404).json({ message: 'No tickets found for this category.' });
      }
  
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
// Crear un nuevo ticket
const addTicket = async (req, res) => {
    try {
        const newTicket = new Ticket(req.body);
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Actualizar un ticket
const updateTicket = async (req, res) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTicket) {
            return res.status(404).send('Ticket no encontrado');
        }
        res.json(updatedTicket);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Eliminar un ticket
const removeTicket = async (req, res) => {
    try {
        await Ticket.findByIdAndDelete(req.params.id);
        res.json({ status: 1, message: 'Ticket deleted' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getTickets,
    getTicketById,
    getTicketByCategory,
    addTicket,
    updateTicket,
    removeTicket
};
