/**
 * OndaHub — Servidor principal
 *
 * Ponto de entrada da aplicação.
 * Configura Express, EJS e conecta as rotas do módulo Agenda.
 */

require('dotenv').config();

const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const agendaRoutes = require('./src/modules/agenda/routes');
const profileRoutes = require('./src/modules/profiles/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Configuração de views (EJS) ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// --- Middlewares ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define um valor padrão para activePage no layout
app.use((req, res, next) => {
  res.locals.activePage = '';
  next();
});

// Arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// --- Rotas ---
app.use('/', agendaRoutes);
app.use('/', profileRoutes);

// --- Página 404 ---
app.use((req, res) => {
  res.status(404).render('error', {
    title: 'Página não encontrada',
    message: 'A página que você procura não existe.',
  });
});

// --- Inicialização ---
app.listen(PORT, () => {
  console.log(`🌙 OndaHub rodando em http://localhost:${PORT}`);
  console.log('   Módulo 01 — Agenda da Cena');
});