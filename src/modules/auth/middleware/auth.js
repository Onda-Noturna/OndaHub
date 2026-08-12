/**
 * OndaHub — Middleware de Autenticação
 *
 * Protege rotas que exigem usuário logado.
 * Injeta `req.user` quando autenticado.
 */

const AuthService = require('../services/AuthService');

/**
 * Middleware de proteção de rotas.
 */
async function requireAuth(req, res, next) {
  if (!req.session || !req.session.userId) {
    return res.redirect('/entrar');
  }

  try {
    const user = await AuthService.findById(req.session.userId);
    if (!user) {
      req.session.destroy();
      return res.redirect('/entrar');
    }
    req.user = user;
    res.locals.currentUser = user;
    return next();
  } catch (error) {
    return res.redirect('/entrar');
  }
}

/**
 * Middleware que carrega o usuário se existir sessão,
 * mas não bloqueia a rota.
 */
async function loadUser(req, res, next) {
  if (req.session && req.session.userId) {
    try {
      const user = await AuthService.findById(req.session.userId);
      if (user) {
        req.user = user;
        res.locals.currentUser = user;
      }
    } catch (error) {
      // sessão inválida — prossegue sem usuário
    }
  }
  return next();
}

module.exports = { requireAuth, loadUser };