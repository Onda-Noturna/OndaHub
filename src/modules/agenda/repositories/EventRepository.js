/**
 * OndaHub — Repositório de Eventos
 *
 * Concentra todas as consultas ao banco relacionadas a eventos.
 * As regras de negócio ficam nos services; aqui ficam apenas
 * operações de persistência.
 */

const { Op } = require('sequelize');
const { Event, FestivalEdition } = require('../models');

class EventRepository {
  /**
   * Lista todos os eventos, ordenados por data.
   */
  async findAll() {
    return Event.findAll({
      order: [['date', 'ASC']],
    });
  }

  /**
   * Busca um evento pelo id, incluindo a edição de festival relacionada.
   */
  async findById(id) {
    return Event.findByPk(id, {
      include: [
        {
          model: FestivalEdition,
          as: 'festivalEdition',
          required: false,
        },
      ],
    });
  }

  /**
   * Busca eventos dentro de um intervalo de datas (inclusive).
   */
  async findByDateRange(startDate, endDate) {
    return Event.findAll({
      where: {
        date: {
          [Op.between]: [startDate, endDate],
        },
      },
      order: [['date', 'ASC']],
    });
  }

  /**
   * Busca eventos de um mês/ano específico.
   */
  async findByMonth(year, month) {
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;

    return this.findByDateRange(startDate, endDate);
  }

  /**
   * Cria um novo evento.
   */
  async create(data) {
    return Event.create(data);
  }

  /**
   * Atualiza um evento existente.
   */
  async update(id, data) {
    const event = await Event.findByPk(id);
    if (!event) return null;
    return event.update(data);
  }

  /**
   * Remove um evento pelo id.
   */
  async delete(id) {
    const event = await Event.findByPk(id);
    if (!event) return null;
    await event.destroy();
    return event;
  }
}

module.exports = new EventRepository();