/**
 * OndaHub — Rotas do módulo Resource
 */

const express = require('express');
const router = express.Router();

const ResourceController = require('./controllers/ResourceController');

// --- Recursos ---
router.get('/', ResourceController.listAll);
router.get('/:id', ResourceController.getById);
router.post('/', ResourceController.create);
router.put('/:id', ResourceController.update);
router.delete('/:id', ResourceController.delete);

module.exports = router;