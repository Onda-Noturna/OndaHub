/**
 * OndaHub — Controlador de Festivais
 *
 * Recebe requisições HTTP e renderiza as views de festivais.
 */

const FestivalService = require('../services/FestivalService');

class FestivalController {
  /**
   * GET /festivais — Lista todos os festivais.
   */
  async list(req, res) {
    try {
      const festivals = await FestivalService.listAll();
      res.render('agenda/festivals', {
        title: 'Festivais',
        festivals,
        activePage: 'festivais',
      });
    } catch (error) {
      res.status(500).render('error', {
        title: 'Erro',
        message: error.message,
      });
    }
  }

  /**
   * GET /festivais/:id — Detalhes de um festival.
   */
  async show(req, res) {
    try {
      const festival = await FestivalService.getById(req.params.id);
      if (!festival) {
        return res.status(404).render('error', {
          title: 'Não encontrado',
          message: 'Festival não encontrado.',
        });
      }
      res.render('agenda/festival-detail', {
        title: festival.name,
        festival,
        activePage: 'festivais',
      });
    } catch (error) {
      res.status(500).render('error', {
        title: 'Erro',
        message: error.message,
      });
    }
  }
}

module.exports = new FestivalController();