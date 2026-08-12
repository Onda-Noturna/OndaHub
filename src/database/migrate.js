/**
 * OndaHub — Migration inicial
 *
 * Cria as tabelas do banco de dados de acordo com o schema do Módulo 01.
 *
 * Uso: npm run db:migrate
 *
 * Observação: como estamos usando Sequelize (ORM), os modelos definem
 * o schema. Este script apenas sincroniza os modelos com o banco
 * utilizando force: false (não destrói dados existentes).
 */

const sequelize = require('../config/database');
const agendaModels = require('../modules/agenda/models');
const profileModels = require('../modules/profiles/models');

// Combina todos os modelos da aplicação
const models = { ...agendaModels, ...profileModels };

async function migrate() {
  try {
    console.log('🔄 Conectando ao banco de dados...');
    await sequelize.authenticate();
    console.log(`✅ Conexão estabelecida (driver: ${sequelize.getDialect()})`);

    console.log('🔄 Sincronizando modelos com o banco...');

    // Cria as tabelas se não existirem (force: false preserva dados)
    await sequelize.sync({ force: false });

    console.log('✅ Migrations aplicadas com sucesso.');
    console.log('   Tabelas criadas:');
    Object.values(models).forEach((model) => {
      console.log(`   - ${model.tableName}`);
    });
  } catch (error) {
    console.error('❌ Erro ao aplicar migrations:', error.message);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

migrate();