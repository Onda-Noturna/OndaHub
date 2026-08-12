/**
 * OndaHub — Serviço de Oportunidades
 *
 * Contém as regras de negócio relacionadas a oportunidades da cena.
 */

const OpportunityRepository = require('../repositories/OpportunityRepository');

const VALID_TYPES = [
  'show',
  'festival',
  'edital',
  'freela',
  'parceria',
  'permuta',
  'voluntariado',
  'contratacao',
  'procura_profissional',
  'procura_artista',
  'procura_banda',
  'divulgacao',
  'outro',
];

const VALID_STATUSES = ['aberta', 'em_analise', 'preenchida', 'encerrada', 'cancelada'];
const VALID_MODALITIES = ['presencial', 'online', 'hibrida'];

class OpportunityService {
  /**
   * Lista todas as oportunidades com filtros.
   */
  async listAll(filters = {}) {
    return OpportunityRepository.findAll(filters);
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
   * Valida os dados de uma oportunidade.
   */
  validate(data) {
    if (!data.title || !data.title.trim()) {
      throw new Error('O título da oportunidade é obrigatório.');
    }
    if (!data.description || !data.description.trim()) {
      throw new Error('A descrição da oportunidade é obrigatória.');
    }
    if (!data.type || !VALID_TYPES.includes(data.type)) {
      throw new Error('O tipo da oportunidade é inválido.');
    }
    if (!data.status || !VALID_STATUSES.includes(data.status)) {
      throw new Error('O status da oportunidade é inválido.');
    }
    if (!data.modality || !VALID_MODALITIES.includes(data.modality)) {
      throw new Error('A modalidade da oportunidade é inválida.');
    }
    if (data.modality === 'presencial' && !data.city && !data.location) {
      throw new Error('Localização é obrigatória quando a modalidade é presencial.');
    }
    if (data.contact_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact_email)) {
      throw new Error('O e-mail de contato é inválido.');
    }
    if (data.start_date && data.end_date && data.start_date > data.end_date) {
      throw new Error('A data de início não pode ser posterior à data de término.');
    }
    if (data.deadline && data.start_date && data.deadline > data.start_date) {
      throw new Error('O prazo não pode ser posterior à data de início.');
    }
  }

  /**
   * Cria uma nova oportunidade.
   */
  async create(data) {
    this.validate(data);
    return OpportunityRepository.create(data);
  }

  /**
   * Atualiza uma oportunidade.
   */
  async update(id, data) {
    this.validate(data);
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