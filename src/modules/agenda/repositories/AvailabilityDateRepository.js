/**
 * OndaHub — Repositório de Datas Disponíveis
 *
 * Concentra as consultas ao banco relacionadas à disponibilidade
 * de casas de show, bandas e outros agentes da cena.
 */

const { AvailabilityDate } = require('../models');

class AvailabilityDateRepository {
  /**
   * Lista todas as datas disponíveis.
   */
  async findAll() {
    return AvailabilityDate.findAll({
      order: [['date', 'ASC']],
    });
  }

  /**
   * Busca datas disponíveis por tipo de entidade (venue, band, etc.).
   */
  async findByEntityType(entityType) {
    return AvailabilityDate.findAll({
      where: { entity_type: entityType },
      order: [['date', 'ASC']],
    });
  }

  /**
   * Busca datas disponíveis de uma entidade específica.
   */
  async findByEntity(entityType, entityId) {
    return AvailabilityDate.findAll({
      where: { entity_type: entityType, entity_id: entityId },
      order: [['date', 'ASC']],
    });
  }

  /**
   * Cria uma nova data disponível.
   */
  async create(data) {
    return AvailabilityDate.create(data);
  }

  /**
   * Remove uma data disponível.
   */
  async delete(id) {
    const availability = await AvailabilityDate.findByPk(id);
    if (!availability) return null;
    await availability.destroy();
    return availability;
  }
}

module.exports = new AvailabilityDateRepository();