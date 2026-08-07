/**
 * OndaHub — Controlador de Oportunidades
 *
 * Recebe requisições HTTP e renderiza as views de oportunidades.
 */

const OpportunityService = require('../services/OpportunityService');

class OpportunityController {
  /**
   * GET /oportunidades — Lista oportunidades abertas.
   */
  async list(req, res) {
    try {
      const opportunities = await OpportunityService.listOpen();
      res.render('agenda/opportunities', {
        title: 'Oportunidades',
        opportunities,
        activePage: 'oportunidades',
      });
    } catch (error) {
      res.status(500).render('error', {
        title: 'Erro',
        message: error.message,
      });
    }
  }

  /**
   * GET /oportunidades/:id — Detalhes de uma oportunidade.
   */
  async show(req, res) {
    try {
      const opportunity = await OpportunityService.getById(req.params.id);
      if (!opportunity) {
        return res.status(404).render('error', {
          title: 'Não encontrado',
          message: 'Oportunidade não encontrada.',
        });
      }
      res.render('agenda/opportunity-detail', {
        title: opportunity.title,
        opportunity,
        activePage: 'oportunidades',
      });
    } catch (error) {
      res.status(500).render('error', {
        title: 'Erro',
        message: error.message,
      });
    }
  }
}

module.exports = new OpportunityController();