/**
 * OndaHub — Modelo de Membro de Comunidade
 *
 * Representa a participação de um usuário em uma comunidade.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const CommunityMember = sequelize.define(
  'CommunityMember',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    community_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'communities',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    role: {
      type: DataTypes.ENUM('membro', 'moderador', 'admin'),
      allowNull: false,
      defaultValue: 'membro',
    },
  },
  {
    tableName: 'community_members',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

CommunityMember.associate = function (models) {
  CommunityMember.belongsTo(models.Community, {
    foreignKey: 'community_id',
    as: 'community',
  });
};

module.exports = CommunityMember;