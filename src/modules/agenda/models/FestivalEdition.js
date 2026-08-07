/**
 * OndaHub — Modelo de Edição de Festival
 *
 * Cada festival pode ter várias edições (Ex.: Festival Underground 2026, 2027...).
 * Cada edição pode ter vários eventos relacionados.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const FestivalEdition = sequelize.define(
  'FestivalEdition',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    festival_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'festivals',
        key: 'id',
      },
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('planejado', 'confirmado', 'cancelado', 'finalizado'),
      allowNull: false,
      defaultValue: 'planejado',
    },
  },
  {
    tableName: 'festival_editions',
    timestamps: false,
  }
);

/**
 * Associações registradas centralmente em models/index.js
 */
FestivalEdition.associate = function (models) {
  FestivalEdition.belongsTo(models.Festival, {
    foreignKey: 'festival_id',
    as: 'festival',
  });

  FestivalEdition.hasMany(models.Event, {
    foreignKey: 'festival_edition_id',
    as: 'events',
  });
};

module.exports = FestivalEdition;