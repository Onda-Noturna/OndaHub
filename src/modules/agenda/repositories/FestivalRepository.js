/**
 * OndaHub — Repositório de Festivais
 *
 * Concentra as consultas ao banco relacionadas a festivais e suas edições.
 */

const { Festival, FestivalEdition, Event } = require('../models');

class FestivalRepository {
  /**
   * Lista todos os festivais com suas edições.
   */
  async findAll() {
    return Festival.findAll({
      include: [
        {
          model: FestivalEdition,
          as: 'editions',
          include: [
            {
              model: Event,
              as: 'events',
              required: false,
            },
          ],
        },
      ],
      order: [
        ['name', 'ASC'],
        [{ model: FestivalEdition, as: 'editions' }, 'year', 'DESC'],
      ],
    });
  }

  /**
   * Busca um festival pelo id com todas as edições e eventos.
   */
  async findById(id) {
    return Festival.findByPk(id, {
      include: [
        {
          model: FestivalEdition,
          as: 'editions',
          include: [
            {
              model: Event,
              as: 'events',
              required: false,
            },
          ],
        },
      ],
      order: [[{ model: FestivalEdition, as: 'editions' }, 'year', 'DESC']],
    });
  }

  /**
   * Cria um novo festival.
   */
  async create(data) {
    return Festival.create(data);
  }

  /**
   * Cria uma edição para um festival.
   */
  async createEdition(festivalId, data) {
    return FestivalEdition.create({
      ...data,
      festival_id: festivalId,
    });
  }

  /**
   * Atualiza um festival.
   */
  async update(id, data) {
    const festival = await Festival.findByPk(id);
    if (!festival) return null;
    return festival.update(data);
  }

  /**
   * Remove um festival pelo id.
   */
  async delete(id) {
    const festival = await Festival.findByPk(id);
    if (!festival) return null;
    await festival.destroy();
    return festival;
  }
}

module.exports = new FestivalRepository();