/**
 * OndaHub — Controlador de Datas Disponíveis
 *
 * Recebe requisições HTTP e renderiza as views de disponibilidade.
 */

const AvailabilityDateService = require('../services/AvailabilityDateService');

class AvailabilityDateController {
  /**
   * GET /datas-disponiveis — Lista todas as datas disponíveis.
   */
  async list(req, res) {
    try {
      const availabilityDates = await AvailabilityDateService.listAll();
      res.render('agenda/availability', {
        title: 'Datas Disponíveis',
        availabilityDates,
        activePage: 'datas-disponiveis',
      });
    } catch (error) {
      res.status(500).render('error', {
        title: 'Erro',
        message: error.message,
      });
    }
  }
}

module.exports = new AvailabilityDateController();