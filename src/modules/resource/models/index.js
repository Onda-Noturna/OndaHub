/**
 * OndaHub — Registro central de modelos do módulo Resource
 */

const Resource = require('./Resource');

const models = {
  Resource,
};

Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

module.exports = models;