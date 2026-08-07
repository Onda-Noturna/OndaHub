/**
 * OndaHub — Serviço de Eventos
 *
 * Contém as regras de negócio relacionadas a eventos.
 * A persistência fica nos repositórios; aqui ficam as decisões.
 */

const EventRepository = require('../repositories/EventRepository');

class EventService {
  /**
   * Lista todos os eventos.
   */
  async listAll() {
    return EventRepository.findAll();
  }

  /**
   * Busca um evento pelo id.
   * Retorna null se não existir.
   */
  async getById(id) {
    return EventRepository.findById(id);
  }

  /**
   * Lista eventos de um mês/ano específico.
   */
  async listByMonth(year, month) {
    return EventRepository.findByMonth(year, month);
  }

  /**
   * Cria um novo evento.
   * Validações básicas de negócio.
   */
  async create(data) {
    if (!data.title) {
      throw new Error('O título do evento é obrigatório.');
    }
    if (!data.date) {
      throw new Error('A data do evento é obrigatória.');
    }

    return EventRepository.create(data);
  }

  /**
   * Atualiza um evento existente.
   */
  async update(id, data) {
    const updated = await EventRepository.update(id, data);
    if (!updated) {
      throw new Error('Evento não encontrado.');
    }
    return updated;
  }

  /**
   * Remove um evento.
   */
  async delete(id) {
    const deleted = await EventRepository.delete(id);
    if (!deleted) {
      throw new Error('Evento não encontrado.');
    }
    return deleted;
  }
}

module.exports = new EventService();