/**
 * OndaHub — Modelo de Contato Profissional
 *
 * Contatos para contratação: e-mail, responsável, telefone, WhatsApp.
 * O WhatsApp pode ser exibido publicamente ou não.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const ProfessionalContact = sequelize.define(
  'ProfessionalContact',
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
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    public_whatsapp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'professional_contacts',
    timestamps: false,
  }
);

ProfessionalContact.associate = function (models) {
  ProfessionalContact.belongsTo(models.Organization, {
    foreignKey: 'organization_id',
    as: 'organization',
  });
};

module.exports = ProfessionalContact;