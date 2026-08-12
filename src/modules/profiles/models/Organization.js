/**
 * OndaHub — Modelo de Organização (entidade base)
 *
 * Representa qualquer participante do ecossistema:
 * banda, artista solo, produtor, casa de show, profissional ou festival.
 *
 * Este modelo NÃO é uma rede social — é um cartão profissional
 * padronizado para descoberta e contratação.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Organization = sequelize.define(
  'Organization',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // Um usuário pode administrar uma ou mais entidades
    },
    type: {
      type: DataTypes.ENUM(
        'band',
        'solo_artist',
        'producer',
        'venue',
        'professional',
        'festival'
      ),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
  },
  {
    tableName: 'organizations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

/**
 * Associações registradas centralmente em models/index.js
 */
Organization.associate = function (models) {
  Organization.hasOne(models.OrganizationProfile, {
    foreignKey: 'organization_id',
    as: 'profile',
  });

  Organization.hasMany(models.OrganizationImage, {
    foreignKey: 'organization_id',
    as: 'images',
  });

  Organization.hasMany(models.OrganizationVideo, {
    foreignKey: 'organization_id',
    as: 'videos',
  });

  Organization.hasMany(models.OrganizationDocument, {
    foreignKey: 'organization_id',
    as: 'documents',
  });

  Organization.hasMany(models.Release, {
    foreignKey: 'organization_id',
    as: 'releases',
  });

  Organization.hasMany(models.PublicContact, {
    foreignKey: 'organization_id',
    as: 'publicContacts',
  });

  Organization.hasMany(models.ProfessionalContact, {
    foreignKey: 'organization_id',
    as: 'professionalContacts',
  });

  Organization.hasOne(models.Availability, {
    foreignKey: 'organization_id',
    as: 'availability',
  });
};

module.exports = Organization;