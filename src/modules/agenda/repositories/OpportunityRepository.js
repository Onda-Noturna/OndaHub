/**
 * OndaHub — Repositório de Oportunidades
 *
 * Concentra as consultas ao banco relacionadas a oportunidades da cena.
 */

const { Op } = require('sequelize');
const { Opportunity, Event, Organization } = require('../models');

class OpportunityRepository {
  /**
   * Lista todas as oportunidades não arquivadas com filtros.
   */
  async findAll(filters = {}) {
    const where = { is_archived: false };

    if (filters.type) {
      where.type = filters.type;
    }
    if (filters.status) {
      where.status = filters.status;
    }
    if (filters.modality) {
      where.modality = filters.modality;
    }
    if (filters.city) {
      where.city = { [Op.like]: `%${filters.city}%` };
    }
    if (filters.state) {
      where.state = filters.state;
    }
    if (filters.q) {
      where[Op.or] = [
        { title: { [Op.like]: `%${filters.q}%` } },
        { description: { [Op.like]: `%${filters.q}%` } },
        { location: { [Op.like]: `%${filters.q}%` } },
        { responsible: { [Op.like]: `%${filters.q}%` } },
      ];
    }

    return Opportunity.findAll({
      where,
      order: [['deadline', 'ASC'], ['created_at', 'DESC']],
      include: [
        {
          model: Event,
          as: 'event',
          required: false,
        },
        {
          model: Organization,
          as: 'organization',
          required: false,
        },
      ],
    });
  }

  /**
   * Lista apenas oportunidades abertas.
   */
  async findOpen() {
    return this.findAll({ status: 'aberta' });
  }

  /**
   * Busca uma oportunidade pelo id.
   */
  async findById(id) {
    return Opportunity.findByPk(id, {
      include: [
        {
          model: Event,
          as: 'event',
          required: false,
        },
        {
          model: Organization,
          as: 'organization',
          required: false,
        },
      ],
    });
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
