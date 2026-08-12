/**
 * OndaHub — Serviço de Organizações
 *
 * Contém as regras de negócio relacionadas a organizações e perfis.
 */

const OrganizationRepository = require('../repositories/OrganizationRepository');

class OrganizationService {
  /**
   * Lista todas as organizações.
   */
  async listAll() {
    return OrganizationRepository.findAll();
  }

  /**
   * Busca organizações com filtros.
   */
  async search(filters) {
    return OrganizationRepository.search(filters);
  }

  /**
   * Busca uma organização pelo slug.
   */
  async getBySlug(slug) {
    return OrganizationRepository.findBySlug(slug);
  }

  /**
   * Cria uma nova organização.
   */
  async create(data) {
    if (!data.name) {
      throw new Error('O nome da organização é obrigatório.');
    }
    if (!data.type) {
      throw new Error('O tipo da organização é obrigatório.');
    }
    if (!data.slug) {
      throw new Error('O slug da organização é obrigatório.');
    }
    return OrganizationRepository.create(data);
  }

  /**
   * Cria o perfil de uma organização.
   */
  async createProfile(organizationId, data) {
    return OrganizationRepository.createProfile(organizationId, data);
  }

  /**
   * Atualiza uma organização.
   */
  async update(id, data) {
    const updated = await OrganizationRepository.update(id, data);
    if (!updated) {
      throw new Error('Organização não encontrada.');
    }
    return updated;
  }

  /**
   * Remove uma organização.
   */
  async delete(id) {
    const deleted = await OrganizationRepository.delete(id);
    if (!deleted) {
      throw new Error('Organização não encontrada.');
    }
    return deleted;
  }
}

module.exports = new OrganizationService();