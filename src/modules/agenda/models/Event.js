/**
 * OndaHub — Modelo de Evento
 *
 * Representa um evento da cena independente cadastrado na agenda.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Event = sequelize.define(
  'Event',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    location: {
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
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    external_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    responsible: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('planejado', 'confirmado', 'cancelado', 'finalizado'),
      allowNull: false,
      defaultValue: 'planejado',
    },
    festival_edition_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'festival_editions',
        key: 'id',
      },
    },
  },
  {
    tableName: 'events',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

/**
 * Associações registradas centralmente em models/index.js
 */
Event.associate = function (models) {
  Event.belongsTo(models.FestivalEdition, {
    foreignKey: 'festival_edition_id',
    as: 'festivalEdition',
  });
};

module.exports = Event;
