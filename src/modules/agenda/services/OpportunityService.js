/**
 * OndaHub — Serviço de Oportunidades
 *
 * Contém as regras de negócio relacionadas a oportunidades abertas.
 */

const OpportunityRepository = require('../repositories/OpportunityRepository');

class OpportunityService {
  /**
   * Lista todas as oportunidades.
   */
  async listAll() {
    return OpportunityRepository.findAll();
  }

  /**
   * Lista apenas oportunidades abertas.
   */
  async listOpen() {
    return OpportunityRepository.findOpen();
  }

  /**
   * Busca uma oportunidade pelo id.
   */
  async getById(id) {
    return OpportunityRepository.findById(id);
  }

  /**
   * Cria uma nova oportunidade.
   */
  async create(data) {
    if (!data.title) {
      throw new Error('O título da oportunidade é obrigatório.');
    }
    if (!data.category) {
      throw new Error('A categoria da oportunidade é obrigatória.');
    }
    return OpportunityRepository.create(data);
  }

  /**
   * Atualiza uma oportunidade.
   */
  async update(id, data) {
    const updated = await OpportunityRepository.update(id, data);
    if (!updated) {
      throw new Error('Oportunidade não encontrada.');
    }
    return updated;
  }

  /**
   * Remove uma oportunidade.
   */
  async delete(id) {
    const deleted = await OpportunityRepository.delete(id);
    if (!deleted) {
      throw new Error('Oportunidade não encontrada.');
    }
    return deleted;
  }
}

module.exports = new OpportunityService();