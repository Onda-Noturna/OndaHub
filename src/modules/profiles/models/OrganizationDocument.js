/**
 * OndaHub — Modelo de Documento de Organização
 *
 * Documentos do portfólio: release, rider técnico e clipping.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const OrganizationDocument = sequelize.define(
  'OrganizationDocument',
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
    type: {
      type: DataTypes.ENUM('release', 'rider', 'clipping'),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    tableName: 'organization_documents',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

/**
 * Associações registradas centralmente em models/index.js
 */
OrganizationDocument.associate = function (models) {
  OrganizationDocument.belongsTo(models.Organization, {
    foreignKey: 'organization_id',
    as: 'organization',
  });
};

module.exports = OrganizationDocument;