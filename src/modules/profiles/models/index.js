/**
 * OndaHub — Registro central de modelos do módulo Profiles
 *
 * Importa todos os modelos e registra as associações.
 * O resto do projeto deve importar os modelos a partir daqui.
 */

const Organization = require('./Organization');
const OrganizationProfile = require('./OrganizationProfile');
const OrganizationImage = require('./OrganizationImage');
const OrganizationVideo = require('./OrganizationVideo');
const OrganizationDocument = require('./OrganizationDocument');
const Release = require('./Release');
const ReleaseLink = require('./ReleaseLink');
const PublicContact = require('./PublicContact');
const ProfessionalContact = require('./ProfessionalContact');
const Availability = require('./Availability');

const models = {
  Organization,
  OrganizationProfile,
  OrganizationImage,
  OrganizationVideo,
  OrganizationDocument,
  Release,
  ReleaseLink,
  PublicContact,
  ProfessionalContact,
  Availability,
};

// Registra associações entre modelos
Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

module.exports = models;