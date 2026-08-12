/**
 * OndaHub — Controlador de Autenticação
 *
 * Recebe requisições HTTP de cadastro, login e logout.
 */

const AuthService = require('../services/AuthService');

class AuthController {
  // GET /cadastrar — formulário de cadastro
  showRegister(req, res) {
    res.render('auth/register', {
      title: 'Criar conta',
      activePage: 'auth',
      error: null,
      form: {},
    });
  }

  // POST /cadastrar
  async register(req, res) {
    const { name, email, password, city, state } = req.body;
    try {
      const user = await AuthService.register({ name, email, password, city, state });
      req.session.userId = user.id;
      return res.redirect('/');
    } catch (error) {
      return res.render('auth/register', {
        title: 'Criar conta',
        activePage: 'auth',
        error: error.message,
        form: { name, email, city, state },
      });
    }
  }

  // GET /entrar — formulário de login
  showLogin(req, res) {
    res.render('auth/login', {
      title: 'Entrar',
      activePage: 'auth',
      error: null,
      form: {},
    });
  }

  // POST /entrar
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await AuthService.login(email, password);
      req.session.userId = user.id;
      return res.redirect('/');
    } catch (error) {
      return res.render('auth/login', {
        title: 'Entrar',
        activePage: 'auth',
        error: error.message,
        form: { email },
      });
    }
  }

  // POST /sair
  logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/');
    });
  }
}

module.exports = new AuthController();