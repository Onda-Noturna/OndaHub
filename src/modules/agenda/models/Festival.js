/**
 * OndaHub — Modelo de Festival
 *
 * Um festival pode possuir várias edições.
 * Estrutura: Festival → Edição → Eventos
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Festival = sequelize.define(
  'Festival',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    organization: {
      type: DataTypes.STRING,
      allowNull: true,
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
    tableName: 'festivals',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

/**
 * Associações registradas centralmente em models/index.js
 */
Festival.associate = function (models) {
  Festival.hasMany(models.FestivalEdition, {
    foreignKey: 'festival_id',
    as: 'editions',
  });
};

module.exports = Festival;