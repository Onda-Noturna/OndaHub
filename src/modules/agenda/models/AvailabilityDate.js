/**
 * OndaHub — Modelo de Data Disponível
 *
 * Representa a disponibilidade de uma casa de show, banda ou outro
 * agente da cena. Usa entity_type + entity_id para permitir
 * associação polimórfica (casas de show, bandas, etc.).
 *
 * Uso futuro:
 *   - Casas de show: disponibilidade de datas para shows
 *   - Bandas: dias/períodos em que estão disponíveis para tocar
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const AvailabilityDate = sequelize.define(
  'AvailabilityDate',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    entity_type: {
      type: DataTypes.STRING,
      allowNull: false,
      // Ex.: 'venue' (casa de show), 'band' (banda), 'artist'
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'availability_dates',
    timestamps: false,
  }
);

module.exports = AvailabilityDate;