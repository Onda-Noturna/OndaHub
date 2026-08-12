/**
 * OndaHub — Serviço de Datas Disponíveis
 *
 * Contém as regras de negócio relacionadas à disponibilidade
 * de casas de show, bandas e outros agentes da cena.
 */

const AvailabilityDateRepository = require('../repositories/AvailabilityDateRepository');

class AvailabilityDateService {
  /**
   * Lista todas as datas disponíveis.
   */
  async listAll() {
    return AvailabilityDateRepository.findAll();
  }

  /**
   * Lista datas disponíveis por tipo de entidade.
   */
  async listByEntityType(entityType) {
    return AvailabilityDateRepository.findByEntityType(entityType);
  }

  /**
   * Lista datas disponíveis de uma entidade específica.
   */
  async listByEntity(entityType, entityId) {
    return AvailabilityDateRepository.findByEntity(entityType, entityId);
  }

  /**
   * Cria uma nova data disponível.
   */
  async create(data) {
    if (!data.entity_type) {
      throw new Error('O tipo de entidade é obrigatório.');
    }
    if (!data.entity_id) {
      throw new Error('O id da entidade é obrigatório.');
    }
    if (!data.date) {
      throw new Error('A data é obrigatória.');
    }
    return AvailabilityDateRepository.create(data);
  }

  /**
   * Remove uma data disponível.
   */
  async delete(id) {
    const deleted = await AvailabilityDateRepository.delete(id);
    if (!deleted) {
      throw new Error('Data disponível não encontrada.');
    }
    return deleted;
  }
}

module.exports = new AvailabilityDateService();