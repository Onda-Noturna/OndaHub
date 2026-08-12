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
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(
        'show',
        'festival',
        'edital',
        'freela',
        'parceria',
        'permuta',
        'voluntariado',
        'contratacao',
        'procura_profissional',
        'procura_artista',
        'procura_banda',
        'divulgacao',
        'outro'
      ),
      allowNull: false,
      field: 'category',
    },
    status: {
      type: DataTypes.ENUM('aberta', 'em_analise', 'preenchida', 'encerrada', 'cancelada'),
      allowNull: false,
      defaultValue: 'aberta',
    },
    modality: {
      type: DataTypes.ENUM('presencial', 'online', 'hibrida'),
      allowNull: false,
      defaultValue: 'presencial',
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
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    deadline: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    contact_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    contact_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    responsible: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'events',
        key: 'id',
      },
    },
    organization_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'organizations',
        key: 'id',
      },
    },
    is_archived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'opportunities',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

Opportunity.associate = function (models) {
  if (models.Event) {
    Opportunity.belongsTo(models.Event, {
      foreignKey: 'event_id',
      as: 'event',
    });
  }

  if (models.Organization) {
    Opportunity.belongsTo(models.Organization, {
      foreignKey: 'organization_id',
      as: 'organization',
    });
  }
};

module.exports = Opportunity;