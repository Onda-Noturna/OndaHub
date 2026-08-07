/**
 * OndaHub — Repositório de Organizações
 *
 * Concentra as consultas ao banco relacionadas a organizações e perfis.
 */

const { Op } = require('sequelize');
const {
  Organization,
  OrganizationProfile,
  OrganizationImage,
  OrganizationVideo,
  OrganizationDocument,
  Release,
  ReleaseLink,
  PublicContact,
  ProfessionalContact,
  Availability,
} = require('../models');

class OrganizationRepository {
  /**
   * Lista todas as organizações com perfil.
   */
  async findAll() {
    return Organization.findAll({
      include: [
        {
          model: OrganizationProfile,
          as: 'profile',
          required: false,
        },
      ],
      order: [['name', 'ASC']],
    });
  }

  /**
   * Busca organizações com filtros (tipo, cidade, estado, busca textual).
   */
  async search({ type, city, state, q, genre }) {
    const where = {};

    if (type) {
      where.type = type;
    }
    if (city) {
      where.city = { [Op.like]: `%${city}%` };
    }
    if (state) {
      where.state = state;
    }
    if (q) {
      where[Op.or] = [
        { name: { [Op.like]: `%${q}%` } },
        { city: { [Op.like]: `%${q}%` } },
      ];
    }

    const include = [
      {
        model: OrganizationProfile,
        as: 'profile',
        required: false,
      },
    ];

    // Filtro por gênero/estilo musical
    if (genre) {
      include[0].where = {
        genre: { [Op.like]: `%${genre}%` },
      };
    }

    return Organization.findAll({
      where,
      include,
      order: [['name', 'ASC']],
    });
  }

  /**
   * Busca uma organização pelo slug com todos os dados do perfil.
   */
  async findBySlug(slug) {
    return Organization.findOne({
      where: { slug },
      include: [
        {
          model: OrganizationProfile,
          as: 'profile',
          required: false,
        },
        {
          model: OrganizationImage,
          as: 'images',
          required: false,
          order: [['order', 'ASC']],
        },
        {
          model: OrganizationVideo,
          as: 'videos',
          required: false,
        },
        {
          model: OrganizationDocument,
          as: 'documents',
          required: false,
        },
        {
          model: Release,
          as: 'releases',
          required: false,
          include: [
            {
              model: ReleaseLink,
              as: 'links',
              required: false,
            },
          ],
        },
        {
          model: PublicContact,
          as: 'publicContacts',
          required: false,
        },
        {
          model: ProfessionalContact,
          as: 'professionalContacts',
          required: false,
        },
        {
          model: Availability,
          as: 'availability',
          required: false,
        },
      ],
    });
  }

  /**
   * Busca uma organização pelo id.
   */
  async findById(id) {
    return Organization.findByPk(id);
  }

  /**
   * Cria uma nova organização.
   */
  async create(data) {
    return Organization.create(data);
  }

  /**
   * Cria o perfil de uma organização.
   */
  async createProfile(organizationId, data) {
    return OrganizationProfile.create({
      ...data,
      organization_id: organizationId,
    });
  }

  /**
   * Atualiza uma organização.
   */
  async update(id, data) {
    const organization = await Organization.findByPk(id);
    if (!organization) return null;
    return organization.update(data);
  }

  /**
   * Remove uma organização.
   */
  async delete(id) {
    const organization = await Organization.findByPk(id);
    if (!organization) return null;
    await organization.destroy();
    return organization;
  }
}

module.exports = new OrganizationRepository();