const { Trayectos, User } = require('../models');

// Crear un nuevo trayecto
const createTrayecto = async (req, res) => {
  try {
    const { id_usuario, fecha_inicio, fecha_fin, medio_transporte, numero_linea } = req.body;
    const trayecto = await Trayectos.create({ id_usuario, fecha_inicio, fecha_fin, medio_transporte, numero_linea });
    res.status(201).json(trayecto);
  } catch (err) {
    res.status(500).json({ error: 'No se pudo crear el trayecto', details: err });
  }
};

// Obtener todos los trayectos
const getAllTrayectos = async (req, res) => {
  try {
    const trayectos = await Trayectos.findAll({
      include: [{
        model: User,
        as: 'usuario',  // Nombre de la relación definida en el modelo
        attributes: ['id', 'userName']  // Solo devolver id y userName del usuario
      }]
    });
    res.status(200).json(trayectos);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron obtener los trayectos', details: err });
  }
};

// Obtener un trayecto por ID
const getTrayectoById = async (req, res) => {
  try {
    const trayecto = await Trayectos.findByPk(req.params.id, {
      include: [{
        model: User,
        as: 'usuario',
        attributes: ['id', 'userName']
      }]
    });
    if (trayecto) {
      res.status(200).json(trayecto);
    } else {
      res.status(404).json({ error: 'Trayecto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'No se pudo obtener el trayecto', details: err });
  }
};

// Actualizar un trayecto por ID
const updateTrayecto = async (req, res) => {
  try {
    const { fecha_inicio, fecha_fin, medio_transporte, numero_linea } = req.body;
    const trayecto = await Trayectos.findByPk(req.params.id);
    if (trayecto) {
      await trayecto.update({ fecha_inicio, fecha_fin, medio_transporte, numero_linea });
      res.status(200).json(trayecto);
    } else {
      res.status(404).json({ error: 'Trayecto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'No se pudo actualizar el trayecto', details: err });
  }
};

// Eliminar un trayecto por ID
const deleteTrayecto = async (req, res) => {
  try {
    const trayecto = await Trayectos.findByPk(req.params.id);
    if (trayecto) {
      await trayecto.destroy();
      res.status(200).json({ message: 'Trayecto eliminado' });
    } else {
      res.status(404).json({ error: 'Trayecto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'No se pudo eliminar el trayecto', details: err });
  }
};

module.exports = {
  createTrayecto,
  getAllTrayectos,
  getTrayectoById,
  updateTrayecto,
  deleteTrayecto
};
