/**
 * OndaHub — Modelo de Perfil de Organização
 *
 * Contém os campos detalhados do perfil profissional de cada entidade.
 * O perfil NÃO é uma rede social — é um portfólio padronizado.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const OrganizationProfile = sequelize.define(
  'OrganizationProfile',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    organization_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'organizations',
        key: 'id',
      },
    },
    short_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    full_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    founded_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('ativo', 'em_pausa', 'encerrado'),
      allowNull: false,
      defaultValue: 'ativo',
    },
    logo_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    banner_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Campos específicos por tipo de entidade
    // --- Banda / Artista solo ---
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // --- Casa de show ---
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    equipment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    has_stage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    has_pa: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    has_lighting: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    // --- Profissional ---
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price_range: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'organization_profiles',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

/**
 * Associações registradas centralmente em models/index.js
 */
OrganizationProfile.associate = function (models) {
  OrganizationProfile.belongsTo(models.Organization, {
    foreignKey: 'organization_id',
    as: 'organization',
  });
};

module.exports = OrganizationProfile;