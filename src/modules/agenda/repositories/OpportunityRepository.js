/**
 * OndaHub — Repositório de Oportunidades
 *
 * Concentra as consultas ao banco relacionadas a oportunidades abertas.
 */

const { Opportunity } = require('../models');

class OpportunityRepository {
  /**
   * Lista todas as oportunidades.
   */
  async findAll() {
    return Opportunity.findAll({
      order: [['created_at', 'DESC']],
    });
  }

  /**
   * Lista apenas oportunidades abertas.
   */
  async findOpen() {
    return Opportunity.findAll({
      where: { status: 'aberta' },
      order: [['deadline', 'ASC']],
    });
  }

  /**
   * Busca uma oportunidade pelo id.
   */
  async findById(id) {
    return Opportunity.findByPk(id);
  }

  /**
   * Cria uma nova oportunidade.
   */
  async create(data) {
    return Opportunity.create(data);
  }

  /**
   * Atualiza uma oportunidade.
   */
  async update(id, data) {
    const opportunity = await Opportunity.findByPk(id);
    if (!opportunity) return null;
    return opportunity.update(data);
  }

  /**
   * Remove uma oportunidade.
   */
  async delete(id) {
    const opportunity = await Opportunity.findByPk(id);
    if (!opportunity) return null;
    await opportunity.destroy();
    return opportunity;
  }
}

module.exports = new OpportunityRepository();