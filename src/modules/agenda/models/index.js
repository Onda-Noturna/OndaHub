/**
 * OndaHub — Registro central de modelos do módulo Agenda
 *
 * Importa todos os modelos e registra as associações.
 * O resto do projeto deve importar os modelos a partir daqui,
 * nunca diretamente de arquivos individuais, para evitar
 * problemas de inicialização circular.
 */

const Event = require('./Event');
const Festival = require('./Festival');
const FestivalEdition = require('./FestivalEdition');
const Opportunity = require('./Opportunity');
const AvailabilityDate = require('./AvailabilityDate');

const models = {
  Event,
  Festival,
  FestivalEdition,
  Opportunity,
  AvailabilityDate,
};

// Registra associações entre modelos
Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

module.exports = models;