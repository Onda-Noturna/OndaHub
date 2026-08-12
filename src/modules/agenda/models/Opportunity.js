/**
 * OndaHub — Modelo de Oportunidade
 *
 * Representa oportunidades abertas para a cena independente:
 * procura-se bandas, músicos, técnicos, fotógrafos, designers, voluntários etc.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Opportunity = sequelize.define(
  'Opportunity',
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
    category: {
      type: DataTypes.ENUM('banda', 'musico', 'tecnico', 'fotografo', 'designer', 'voluntario'),
      allowNull: false,
    },
    responsible: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deadline: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('aberta', 'encerrada'),
      allowNull: false,
      defaultValue: 'aberta',
    },
  },
  {
    tableName: 'opportunities',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = Opportunity;