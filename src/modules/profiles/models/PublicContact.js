/**
 * OndaHub — Modelo de Contato Público
 *
 * Redes sociais e links públicos de uma organização.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const PublicContact = sequelize.define(
  'PublicContact',
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
    platform: {
      type: DataTypes.ENUM(
        'instagram',
        'facebook',
        'tiktok',
        'youtube',
        'spotify',
        'bandcamp',
        'site'
      ),
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'public_contacts',
    timestamps: false,
  }
);

PublicContact.associate = function (models) {
  PublicContact.belongsTo(models.Organization, {
    foreignKey: 'organization_id',
    as: 'organization',
  });
};

module.exports = PublicContact;