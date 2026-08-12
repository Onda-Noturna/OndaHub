# OndaHub — Protótipo (Módulo 05)

> Documentação do protótipo da nova direção do OndaHub: infraestrutura comunitária de colaboração e ativação da cena.

---

## Visão Geral

O OndaHub evoluiu de um simples sistema de agenda para uma plataforma completa de **infraestrutura comunitária**. O protótipo introduz quatro novos módulos além do módulo original de agenda:

| Módulo | Descrição |
|--------|-----------|
| **01 — Agenda da Cena** | Eventos, festivais, oportunidades (já existia) |
| **02 — Perfis de Projetos** | Bandas, organizações, lançamentos, contatos (já existia) |
| **03 — Comunidades** | Grupos de afinidade, território, estilo (novo) |
| **04 — Biblioteca de Recursos** | Equipamentos, espaços, conhecimento compartilhados (novo) |

---

## Novos Módulos

### Módulo 03 — Comunidades

Permite a criação e participação em comunidades baseadas em afinidade, território ou estilo musical.

- **Modelos**: `Community`, `CommunityMember`
- **Tipos de comunidade**: `territorio`, `estilo`, `profissao`, `projeto`, `organizacao`
- **Papéis**: `membro`, `moderador`, `admin`
- **Rotas principais**:
  - `GET /comunidades` — Listar todas as comunidades
  - `GET /comunidades/:id` — Detalhes da comunidade
  - `POST /comunidades/:id/join` — Entrar na comunidade
  - `POST /comunidades/:id/leave` — Sair da comunidade
  - `GET /comunidades/:id/members` — Listar membros

### Módulo 04 — Biblioteca de Recursos

Facilita o compartilhamento de equipamentos, espaços e conhecimento entre os membros da cena.

- **Modelos**: `Resource`
- **Tipos de recurso**: `equipamento`, `espaco`, `conhecimento`, `contato`, `material`
- **Rotas principais**:
  - `GET /recursos` — Listar todos os recursos
  - `GET /recursos/:id` — Detalhes do recurso
  - `POST /recursos` — Criar um novo recurso
  - `PUT /recursos/:id` — Atualizar um recurso
  - `DELETE /recursos/:id` — Remover um recurso

---

## Autenticação

O sistema de autenticação foi implementado do zero com:

- **Modelo `User`**: `id`, `name`, `email`, `password_hash`, `city`, `state`
- **Hash de senha**: `bcryptjs` com 10 rounds de salt
- **Sessão**: `express-session` com `SESSION_SECRET`
- **Rotas**:
  - `GET /cadastrar` — Formulário de cadastro
  - `POST /cadastrar` — Criar conta
  - `GET /entrar` — Formulário de login
  - `POST /entrar` — Login
  - `POST /sair` — Logout
- **Usuário de teste**: `demo@ondahub.example` / `demo123`

---

## Estrutura de Dados (Banco)

Tabelas principais criadas:

| Tabela | Descrição |
|--------|-----------|
| `users` | Usuários da plataforma |
| `communities` | Comunidades de afinidade/território |
| `community_members` | Membros de comunidades |
| `resources` | Recursos compartilhados (equipamentos, espaços) |
| `events` | Eventos da cena (mantido do módulo 01) |
| `festivals` | Festivais (mantido do módulo 01) |
| `opportunities` | Oportunidades de colaboração (mantido do módulo 01) |

---

## Fluxo de Uso

1. **Cadastro/Login**: Usuário cria conta ou faz login via `/entrar`
2. **Exploração**: Navega por comunidades e recursos
3. **Participação**: Pode ingressar em comunidades e listar/mark resources
4. **Criação**: Usuários autenticados podem criar comunidades e recursos

---

## Desenvolvimento

### Comandos úteis

```bash
# Migrations (criar/atualizar tabelas)
npm run db:migrate

# Seed (popular com dados fictícios)
npm run db:seed

# Rodar o servidor
npm start

# Testar autenticação
# Acesse http://localhost:3000/entrar
# Usuário: demo@ondahub.example / senha: demo123
```

### Adicionando novos modelos

1. Crie o modelo em `src/modules/[nome]/models/[nome].js`
2. Adicione o modelo em `src/modules/[nome]/models/index.js`
3. Crie o repositório em `src/modules/[nome]/repositories/[nome]Repository.js`
4. Crie o service em `src/modules/[nome]/services/[nome]Service.js`
5. Crie o controller em `src/modules/[nome]/controllers/[nome]Controller.js`
6. Crie as rotas em `src/modules/[nome]/routes.js`
7. Atualize `src/database/migrate.js` para incluir o novo módulo
8. Atualize `src/database/seed.js` para incluir dados de exemplo

---

## Próximos Passos

- [ ] Criar views EJS para comunidades e recursos
- [ ] Implementar proteção de rotas em mais áreas
- [ ] Adicionar mais tipos de comunidades e recursos
- [ ] Implementar sistema de notificações
- [ ] Criar dashboard administrativo