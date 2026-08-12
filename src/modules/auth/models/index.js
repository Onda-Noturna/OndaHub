/**
 * OndaHub — Registro central de modelos do módulo Auth
 */

const User = require('./User');

const models = {
  User,
};

Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

module.exports = models;