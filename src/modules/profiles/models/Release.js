/**
 * OndaHub — Modelo de Lançamento
 *
 * Representa um lançamento musical (single, EP, álbum, ao vivo).
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Release = sequelize.define(
  'Release',
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
    type: {
      type: DataTypes.ENUM('single', 'ep', 'album', 'ao_vivo'),
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    cover_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: 'releases',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

Release.associate = function (models) {
  Release.belongsTo(models.Organization, {
    foreignKey: 'organization_id',
    as: 'organization',
  });
  Release.hasMany(models.ReleaseLink, {
    foreignKey: 'release_id',
    as: 'links',
  });
};

module.exports = Release;