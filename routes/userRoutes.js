const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importamos el controlador de usuario

// Rutas CRUD para el modelo User
router.get('/', (req, res) => {
    res.send('Ruta de usuarios'); // Cambia esto por la lógica que necesites
  });
  
  // Definir una ruta para el login
  router.post('/login', (req, res) => {
    // Lógica para manejar el login
    res.send('Login exitoso'); // Cambia esto por tu lógica
  });
// Crear un nuevo usuario
router.post('/', userController.createUser);

// Obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Obtener un usuario por ID
router.get('/:id', userController.getUserById);

// Actualizar un usuario por ID
router.put('/:id', userController.updateUser);

// Eliminar un usuario por ID
router.delete('/:id', userController.deleteUser);
// Login de usuario


module.exports = router;


