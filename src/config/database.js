/**
 * OndaHub — Configuração centralizada do banco de dados
 *
 * A conexão NÃO deve ser espalhada pelo código.
 * Todo o projeto deve importar a instância `sequelize` deste arquivo.
 *
 * Drivers suportados:
 *   - sqlite   (desenvolvimento local)
 *   - postgres (produção)
 *   - mysql    (produção)
 *   - mariadb  (produção)
 *
 * Para trocar de banco, basta alterar as variáveis de ambiente
 * (ver arquivo `.env.example`).
 */

require('dotenv').config();

const { Sequelize } = require('sequelize');

const driver = process.env.DATABASE_DRIVER || 'sqlite';

/**
 * Mapeia o driver para o dialeto do Sequelize.
 * Isso permite que a aplicação funcione apenas alterando
 * as configurações no arquivo `.env`.
 */
const dialectMap = {
  sqlite: 'sqlite',
  postgres: 'postgres',
  mysql: 'mysql',
  mariadb: 'mariadb',
};

const dialect = dialectMap[driver];

if (!dialect) {
  throw new Error(
    `DATABASE_DRIVER inválido: "${driver}". ` +
    `Use um dos valores: ${Object.keys(dialectMap).join(', ')}.`
  );
}

/**
 * Cria a instância do Sequelize de acordo com o driver configurado.
 */
function createSequelizeInstance() {
  // SQLite — banco local para testes e desenvolvimento
  if (dialect === 'sqlite') {
    const storage = process.env.DATABASE_STORAGE || './data/ondahub.sqlite';

    return new Sequelize({
      dialect: 'sqlite',
      storage,
      logging: false,
    });
  }

  // PostgreSQL / MySQL / MariaDB — ambiente web
  const config = {
    dialect,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || undefined,
    database: process.env.DATABASE_NAME || 'ondahub',
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    logging: false,
  };

  return new Sequelize(config);
}

const sequelize = createSequelizeInstance();

module.exports = sequelize;