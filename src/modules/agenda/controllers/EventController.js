/**
 * OndaHub — Controlador de Eventos
 *
 * Recebe requisições HTTP e renderiza as views.
 * A lógica de negócio fica nos services.
 */

const EventService = require('../services/EventService');

class EventController {
  /**
   * GET / — Página inicial com calendário de eventos.
   */
  async index(req, res) {
    try {
      const events = await EventService.listAll();
      res.render('agenda/index', {
        title: 'Agenda da Cena',
        events,
        activePage: 'agenda',
      });
    } catch (error) {
      res.status(500).render('error', {
        title: 'Erro',
        message: error.message,
      });
    }
  }

  /**
   * GET /eventos — Lista todos os eventos.
   */
  async list(req, res) {
    try {
      const events = await EventService.listAll();
      res.render('agenda/events', {
        title: 'Eventos',
        events,
        activePage: 'eventos',
      });
    } catch (error) {
      res.status(500).render('error', {
        title: 'Erro',
        message: error.message,
      });
    }
  }

  /**
   * GET /eventos/:id — Página de detalhes do evento.
   */
  async show(req, res) {
    try {
      const event = await EventService.getById(req.params.id);
      if (!event) {
        return res.status(404).render('error', {
          title: 'Não encontrado',
          message: 'Evento não encontrado.',
        });
      }
      res.render('agenda/event-detail', {
        title: event.title,
        event,
        activePage: 'eventos',
      });
    } catch (error) {
      res.status(500).render('error', {
        title: 'Erro',
        message: error.message,
      });
    }
  }
}

module.exports = new EventController();