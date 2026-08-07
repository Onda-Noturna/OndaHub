/**
 * OndaHub — Modelo de Imagem de Organização
 *
 * Galeria de fotos do portfólio de cada entidade.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const OrganizationImage = sequelize.define(
  'OrganizationImage',
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
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caption: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: 'organization_images',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

/**
 * Associações registradas centralmente em models/index.js
 */
OrganizationImage.associate = function (models) {
  OrganizationImage.belongsTo(models.Organization, {
    foreignKey: 'organization_id',
    as: 'organization',
  });
};

module.exports = OrganizationImage;