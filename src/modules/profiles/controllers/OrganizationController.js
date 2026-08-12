/**
 * OndaHub — Controlador de Organizações
 *
 * Recebe requisições HTTP e renderiza as views de perfis.
 * Integra com a Agenda da Cena para exibir eventos relacionados.
 */

const { Op } = require('sequelize');
const OrganizationService = require('../services/OrganizationService');
const { Event } = require('../../agenda/models');

class OrganizationController {
  /**
   * GET /perfis — Lista organizações com filtros e busca.
   */
  async list(req, res) {
    try {
      const { type, city, state, q, genre } = req.query;
      const organizations = await OrganizationService.search({
        type,
        city,
        state,
        q,
        genre,
      });

      res.render('profiles/index', {
        title: 'Perfis da Cena',
        organizations,
        filters: { type, city, state, q, genre },
        activePage: 'perfis',
      });
    } catch (error) {
      res.status(500).render('error', {
        title: 'Erro',
        message: error.message,
      });
    }
  }

  /**
   * GET /perfis/:slug — Página pública do perfil.
   */
  async show(req, res) {
    try {
      const organization = await OrganizationService.getBySlug(req.params.slug);
      if (!organization) {
        return res.status(404).render('error', {
          title: 'Não encontrado',
          message: 'Perfil não encontrado.',
        });
      }

      // Integração com Agenda da Cena: próximos eventos
      const upcomingEvents = await Event.findAll({
        where: {
          date: { [Op.gte]: new Date().toISOString().slice(0, 10) },
          status: { [Op.ne]: 'cancelado' },
        },
        order: [['date', 'ASC']],
        limit: 5,
      });

      res.render('profiles/show', {
        title: organization.name,
        organization,
        upcomingEvents,
        activePage: 'perfis',
      });
    } catch (error) {
      res.status(500).render('error', {
        title: 'Erro',
        message: error.message,
      });
    }
  }
}

module.exports = new OrganizationController();