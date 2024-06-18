const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
const path = require('path');
var app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Cargamos el modulo de direccionamiento de rutas

app.use('/api/productos', require('./routes/producto.route.js'));
app.use('/api/transactions', require('./routes/transaction.route.js'));
app.use('/api/espectadores', require('./routes/espectador.route.js'));
app.use('/api/ticket', require('./routes/ticket.route.js'));

// Sirve archivos estáticos desde el directorio uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Setting
app.set('port', process.env.PORT || 3000);

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Servidor iniciado en el puerto`, app.get('port'));
});
