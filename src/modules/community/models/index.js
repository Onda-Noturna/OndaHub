/**
 * OndaHub — Registro central de modelos do módulo Community
 */

const Community = require('./Community');
const CommunityMember = require('./CommunityMember');

const models = {
  Community,
  CommunityMember,
};

Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

module.exports = models;