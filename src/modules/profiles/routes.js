/**
 * OndaHub — Rotas do módulo Profiles
 *
 * Define as rotas HTTP do módulo de perfis e conecta aos controllers.
 */

const express = require('express');
const router = express.Router();

const OrganizationController = require('./controllers/OrganizationController');

// --- Listagem de perfis com filtros e busca ---
router.get('/perfis', OrganizationController.list);

// --- Página pública do perfil ---
router.get('/perfis/:slug', OrganizationController.show);

module.exports = router;