/**
 * OndaHub — Serviço de Comunidades
 */

const CommunityRepository = require('../repositories/CommunityRepository');

class CommunityService {
  async listAll() {
    return CommunityRepository.findAll();
  }

  async getById(id) {
    return CommunityRepository.findById(id);
  }

  async create(data) {
    if (!data.name) {
      throw new Error('O nome da comunidade é obrigatório.');
    }
    return CommunityRepository.create(data);
  }

  async join(communityId, userId) {
    return CommunityMember.create({
      community_id: communityId,
      user_id: userId,
      role: 'membro',
    });
  }

  async leave(communityId, userId) {
    return CommunityMember.destroy({
      where: { community_id: communityId, user_id: userId },
    });
  }

  async getMembers(communityId) {
    return CommunityMember.findAll({
      where: { community_id: communityId },
      include: [{ model: User, as: 'user', attributes: ['id', 'name', 'email'] }],
    });
  }
}

module.exports = new CommunityService();