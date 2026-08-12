/**
 * OndaHub — Repositório de Recursos
 */

const { Resource } = require('../models');

class ResourceRepository {
  async findAll() {
    return Resource.findAll({
      include: [{ model: Resource.owner_constructor || require('../models').User, as: 'owner' }, { model: Resource.community_constructor || require('../models').Community, as: 'community' }],
      order: [['created_at', 'DESC']],
    });
  }

  async findById(id) {
    return Resource.findByPk(id);
  }

  async create(data) {
    return Resource.create(data);
  }

  async update(id, data) {
    const resource = await Resource.findByPk(id);
    if (!resource) return null;
    return resource.update(data);
  }

  async delete(id) {
    const resource = await Resource.findByPk(id);
    if (!resource) return null;
    return resource.destroy();
  }
}

module.exports = new ResourceRepository();