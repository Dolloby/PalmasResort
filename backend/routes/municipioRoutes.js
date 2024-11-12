const express = require('express');
const router = express.Router();
const municipioController = require('../controllers/municipioController');

// Obtener todos los hoteles (para todos los usuarios)
router.get('/', municipioController.getAllTown);
module.exports = router;