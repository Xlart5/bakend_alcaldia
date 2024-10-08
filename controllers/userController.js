const { User } = require('../models');

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { userName, password } = req.body;  // Solo tomar username y password del body
    const user = await User.create({ userName, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'No se pudo crear el usuario', details: err });
  }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'userName']  // Solo devolver username y ID, no el password
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'No se pudo obtener los usuarios', details: err });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'userName']  // Devolver solo username e ID
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'No se pudo obtener el usuario', details: err });
  }
};

// Actualizar un usuario por ID
const updateUser = async (req, res) => {
  try {
    const { userName, password } = req.body;  // Solo actualizar userName y password
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update({ userName, password });
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'No se pudo actualizar el usuario', details: err });
  }
};

// Eliminar un usuario por ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(200).json({ message: 'Usuario eliminado' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'No se pudo eliminar el usuario', details: err });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
