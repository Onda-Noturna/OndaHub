/**
 * OndaHub — Serviço de Recursos
 */

const ResourceRepository = require('../repositories/ResourceRepository');

class ResourceService {
  async listAll() {
    return ResourceRepository.findAll();
  }

  async getById(id) {
    return ResourceRepository.findById(id);
  }

  async create(data) {
    if (!data.title) {
      throw new Error('O título do recurso é obrigatório.');
    }
    return ResourceRepository.create(data);
  }

  async update(id, data) {
    return ResourceRepository.update(id, data);
  }

  async delete(id) {
    return ResourceRepository.delete(id);
  }
}

module.exports = new ResourceService();