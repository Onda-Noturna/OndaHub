/**
 * OndaHub — Servidor principal
 *
 * Ponto de entrada da aplicação.
 * Configura Express, EJS e conecta as rotas do módulo Agenda.
 */

require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');

const agendaRoutes = require('./src/modules/agenda/routes');
const profileRoutes = require('./src/modules/profiles/routes');
const authRoutes = require('./src/modules/auth/routes');
const { loadUser } = require('./src/modules/auth/middleware/auth');

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

// Sessão
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'ondahub-dev-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 dia
  })
);

// Define valores padrão para as views (sempre disponíveis)
app.use((req, res, next) => {
  res.locals.currentUser = null;
  res.locals.activePage = '';
  next();
});

// Carrega o usuário logado (se existir) em todas as rotas
app.use(loadUser);

// Arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// --- Rotas ---
app.use('/', authRoutes);
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