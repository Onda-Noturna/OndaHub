/**
 * OndaHub — Controlador de Comunidades
 */

const CommunityService = require('../services/CommunityService');

class CommunityController {
  async listAll(req, res) {
    try {
      const communities = await CommunityService.listAll();
      return res.json(communities);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const community = await CommunityService.getById(req.params.id);
      if (!community) {
        return res.status(404).json({ error: 'Comunidade não encontrada.' });
      }
      return res.json(community);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const community = await CommunityService.create(req.body);
      return res.status(201).json(community);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async join(req, res) {
    try {
      const { communityId } = req.params;
      const userId = req.session?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
      }
      await CommunityService.join(communityId, userId);
      return res.json({ message: 'Você ingressou na comunidade.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async leave(req, res) {
    try {
      const { communityId } = req.params;
      const userId = req.session?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
      }
      await CommunityService.leave(communityId, userId);
      return res.json({ message: 'Você saiu da comunidade.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getMembers(req, res) {
    try {
      const { communityId } = req.params;
      const members = await CommunityService.getMembers(communityId);
      return res.json(members);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CommunityController();