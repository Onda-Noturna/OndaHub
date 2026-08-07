/**
 * OndaHub — Serviço de Festivais
 *
 * Contém as regras de negócio relacionadas a festivais e suas edições.
 */

const FestivalRepository = require('../repositories/FestivalRepository');

class FestivalService {
  /**
   * Lista todos os festivais com suas edições e eventos.
   */
  async listAll() {
    return FestivalRepository.findAll();
  }

  /**
   * Busca um festival pelo id.
   */
  async getById(id) {
    return FestivalRepository.findById(id);
  }

  /**
   * Cria um novo festival.
   */
  async create(data) {
    if (!data.name) {
      throw new Error('O nome do festival é obrigatório.');
    }
    return FestivalRepository.create(data);
  }

  /**
   * Cria uma edição para um festival.
   */
  async createEdition(festivalId, data) {
    if (!data.year) {
      throw new Error('O ano da edição é obrigatório.');
    }
    return FestivalRepository.createEdition(festivalId, data);
  }

  /**
   * Atualiza um festival.
   */
  async update(id, data) {
    const updated = await FestivalRepository.update(id, data);
    if (!updated) {
      throw new Error('Festival não encontrado.');
    }
    return updated;
  }

  /**
   * Remove um festival.
   */
  async delete(id) {
    const deleted = await FestivalRepository.delete(id);
    if (!deleted) {
      throw new Error('Festival não encontrado.');
    }
    return deleted;
  }
}

module.exports = new FestivalService();