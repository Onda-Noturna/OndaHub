/**
 * OndaHub — Rotas do módulo Auth
 *
 * Define as rotas de cadastro, login e logout.
 */

const express = require('express');
const router = express.Router();

const AuthController = require('./controllers/AuthController');

// --- Cadastro ---
router.get('/cadastrar', AuthController.showRegister);
router.post('/cadastrar', AuthController.register);

// --- Login ---
router.get('/entrar', AuthController.showLogin);
router.post('/entrar', AuthController.login);

// --- Logout ---
router.post('/sair', AuthController.logout);

module.exports = router;