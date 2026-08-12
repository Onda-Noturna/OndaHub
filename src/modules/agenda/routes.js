/**
 * OndaHub — Rotas do módulo Agenda
 *
 * Define as rotas HTTP do módulo e conecta aos controllers.
 */

const express = require('express');
const router = express.Router();

const EventController = require('./controllers/EventController');
const FestivalController = require('./controllers/FestivalController');
const OpportunityController = require('./controllers/OpportunityController');
const AvailabilityDateController = require('./controllers/AvailabilityDateController');

// --- Página inicial / Agenda ---
router.get('/', EventController.index);

// --- Eventos ---
router.get('/eventos', EventController.list);
router.get('/eventos/:id', EventController.show);

// --- Festivais ---
router.get('/festivais', FestivalController.list);
router.get('/festivais/:id', FestivalController.show);

// --- Oportunidades ---
router.get('/oportunidades', OpportunityController.list);
router.get('/oportunidades/:id', OpportunityController.show);

// --- Datas disponíveis ---
router.get('/datas-disponiveis', AvailabilityDateController.list);

module.exports = router;