const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Importamos las rutas de usuario
const trayectosRoutes = require('./routes/trayectosRoutes'); // Importamos las rutas de trayecto

// Habilitar CORS para todas las solicitudes
app.use(cors());


app.use(express.json()); // Middleware para procesar JSON

// Definir las rutas
app.use('/users', userRoutes); // Todas las rutas de usuarios estarán bajo '/users'
app.use('/trayectos', trayectosRoutes); // Todas las rutas de usuarios estarán bajo '/trayectos'

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);

  
});
