/**
 * OndaHub — Serviço de Autenticação
 *
 * Contém as regras de negócio de cadastro, login e logout.
 */

const UserRepository = require('../repositories/UserRepository');

class AuthService {
  async register({ name, email, password, city, state }) {
    if (!name || !email || !password) {
      throw new Error('Nome, e-mail e senha são obrigatórios.');
    }
    if (password.length < 6) {
      throw new Error('A senha deve ter no mínimo 6 caracteres.');
    }

    const existing = await UserRepository.findByEmail(email);
    if (existing) {
      throw new Error('Já existe um usuário com este e-mail.');
    }

    return UserRepository.create({
      name,
      email,
      password_hash: password, // será hasheado pelo hook beforeSave
      city,
      state,
    });
  }

  async login(email, password) {
    if (!email || !password) {
      throw new Error('E-mail e senha são obrigatórios.');
    }

    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new Error('Credenciais inválidas.');
    }

    const valid = await user.comparePassword(password);
    if (!valid) {
      throw new Error('Credenciais inválidas.');
    }

    return user;
  }

  async findById(id) {
    return UserRepository.findById(id);
  }
}

module.exports = new AuthService();