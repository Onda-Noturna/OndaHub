/**
 * OndaHub — Modelo de Vídeo de Organização
 *
 * Vídeos do portfólio (YouTube, Vimeo ou link externo).
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const OrganizationVideo = sequelize.define(
  'OrganizationVideo',
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform: {
      type: DataTypes.ENUM('youtube', 'vimeo', 'external'),
      allowNull: false,
      defaultValue: 'external',
    },
  },
  {
    tableName: 'organization_videos',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

/**
 * Associações registradas centralmente em models/index.js
 */
OrganizationVideo.associate = function (models) {
  OrganizationVideo.belongsTo(models.Organization, {
    foreignKey: 'organization_id',
    as: 'organization',
  });
};

module.exports = OrganizationVideo;