/**
 * OndaHub — Repositório de Comunidades
 */

const { Community, CommunityMember } = require('../models');

class CommunityRepository {
  async findAll() {
    return Community.findAll({
      include: [{ model: CommunityMember, as: 'members', required: false }],
      order: [['name', 'ASC']],
    });
  }

  async findById(id) {
    return Community.findByPk(id, {
      include: [{ model: CommunityMember, as: 'members', required: false }],
    });
  }

  async create(data) {
    return Community.create(data);
  }

  async addMember(communityId, userId, role = 'membro') {
    return CommunityMember.create({ community_id: communityId, user_id: userId, role });
  }
}

module.exports = new CommunityRepository();