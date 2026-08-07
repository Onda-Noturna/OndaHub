/**
 * OndaHub — Modelo de Disponibilidade
 *
 * Estrutura de disponibilidade para shows, festivais e eventos.
 * O cachê é privado por padrão.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Availability = sequelize.define(
  'Availability',
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
    accepts_shows: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    accepts_festivals: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    accepts_corporate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preferred_days: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    needs_support: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    cache_value: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cache_private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'availabilities',
    timestamps: false,
  }
);

Availability.associate = function (models) {
  Availability.belongsTo(models.Organization, {
    foreignKey: 'organization_id',
    as: 'organization',
  });
};

module.exports = Availability;