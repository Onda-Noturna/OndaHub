/**
 * OndaHub — Modelo de Recurso
 *
 * Representa recursos disponíveis para a comunidade compartilharem:
 * equipamentos, espaços, conhecimento, contatos etc.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Resource = sequelize.define(
  'Resource',
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
    type: {
      type: DataTypes.ENUM('equipamento', 'espaco', 'conhecimento', 'contato', 'material'),
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    community_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'communities',
        key: 'id',
      },
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: 'resources',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

Resource.associate = function (models) {
  // Associações opcionais — só criam se os modelos existirem
  if (models.User) {
    Resource.belongsTo(models.User, {
      foreignKey: 'owner_id',
      as: 'owner',
    });
  }
  if (models.Community) {
    Resource.belongsTo(models.Community, {
      foreignKey: 'community_id',
      as: 'community',
    });
  }
};

module.exports = Resource;