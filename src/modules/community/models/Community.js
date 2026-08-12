/**
 * OndaHub — Modelo de Comunidade
 *
 * Representa um espaço de organização por afinidade, território
 * ou área de atuação dentro da cena independente.
 *
 * Exemplos: Rock Brasília, Metal DF, Fotógrafos da cena,
 * Produtores independentes, Onda Noturna, Cultura independente.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Community = sequelize.define(
  'Community',
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
    type: {
      type: DataTypes.ENUM('territorio', 'estilo', 'profissao', 'projeto', 'organizacao'),
      allowNull: false,
      defaultValue: 'territorio',
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    tableName: 'communities',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

Community.associate = function (models) {
  Community.hasMany(models.CommunityMember, {
    foreignKey: 'community_id',
    as: 'members',
  });
};

module.exports = Community;