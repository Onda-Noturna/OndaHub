/**
 * OndaHub — Modelo de Link de Lançamento
 *
 * Links de streaming de um lançamento (Spotify, YouTube, Bandcamp, SoundCloud).
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const ReleaseLink = sequelize.define(
  'ReleaseLink',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    release_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'releases',
        key: 'id',
      },
    },
    platform: {
      type: DataTypes.ENUM('spotify', 'youtube', 'bandcamp', 'soundcloud'),
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'release_links',
    timestamps: false,
  }
);

ReleaseLink.associate = function (models) {
  ReleaseLink.belongsTo(models.Release, {
    foreignKey: 'release_id',
    as: 'release',
  });
};

module.exports = ReleaseLink;