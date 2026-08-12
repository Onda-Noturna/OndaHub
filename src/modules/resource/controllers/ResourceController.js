/**
 * OndaHub — Controlador de Recursos
 */

const ResourceService = require('../services/ResourceService');

class ResourceController {
  async listAll(req, res) {
    try {
      const resources = await ResourceService.listAll();
      return res.json(resources);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const resource = await ResourceService.getById(req.params.id);
      if (!resource) {
        return res.status(404).json({ error: 'Recurso não encontrado.' });
      }
      return res.json(resource);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const resource = await ResourceService.create(req.body);
      return res.status(201).json(resource);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const resource = await ResourceService.update(id, req.body);
      if (!resource) {
        return res.status(404).json({ error: 'Recurso não encontrado.' });
      }
      return res.json(resource);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const resource = await ResourceService.delete(id);
      if (!resource) {
        return res.status(404).json({ error: 'Recurso não encontrado.' });
      }
      return res.json({ message: 'Recurso removido com sucesso.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ResourceController();