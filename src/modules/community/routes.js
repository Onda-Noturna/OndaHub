/**
 * OndaHub — Rotas do módulo Community
 */

const express = require('express');
const router = express.Router();

const CommunityController = require('./controllers/CommunityController');

// --- Comunidades ---
router.get('/', CommunityController.listAll);
router.get('/:id', CommunityController.getById);
router.post('/', CommunityController.create);

// --- Membros ---
router.post('/:id/join', CommunityController.join);
router.post('/:id/leave', CommunityController.leave);
router.get('/:id/members', CommunityController.getMembers);

module.exports = router;