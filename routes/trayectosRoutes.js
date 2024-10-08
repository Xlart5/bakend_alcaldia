const express = require('express');
const router = express.Router();
const {
    createTrayecto,
    getAllTrayectos,
    getTrayectoById,
    updateTrayecto,
    deleteTrayecto
  } = require('../controllers/trayectosController'); // Importamos el controlador de trayectos

// Rutas CRUD para el modelo Trayectos


// Ruta para crear un nuevo trayecto
router.post('/', createTrayecto);

// Ruta para obtener todos los trayectos
router.get('/', getAllTrayectos);

// Ruta para obtener un trayecto por ID
router.get('/:id', getTrayectoById);

// Ruta para actualizar un trayecto por ID
router.put('/:id', updateTrayecto);

// Ruta para eliminar un trayecto por ID
router.delete('/:id', deleteTrayecto);

module.exports = router;
