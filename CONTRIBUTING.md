# OndaHub — Diretrizes de Contribuição

## Visão Geral

O OndaHub é uma plataforma de infraestrutura comunitária para a cena independente. Este documento descreve as convenções e o processo para contribuir com o projeto.

## Estrutura do Projeto

```
src/
├── config/              → Configurações (database, ambiente)
├── database/            → Migrações e seeds
├── modules/
│   ├── agenda/          → Módulo 01: Agenda da Cena (eventos, festivais, oportunidades)
│   ├── profiles/        → Módulo 02: Perfis de Projetos (bandas, organizações, contatos)
│   ├── community/       → Módulo 03: Comunidades (grupos de afinidade, membros)
│   └── resource/        → Módulo 04: Biblioteca de Recursos (equipamentos, espaços)
├── views/               → Templates EJS
├── public/              → Arquivos estáticos (CSS, JS, imagens)
├── docs/                → Documentação do produto
└── server.js            → Entry point Express
```

## Convenções

- **Código**: Siga o estilo existente (ES6+, async/await, try/catch).
- **Commits**: Mensagens claras e descritivas. Use o formato `feat:`, `fix:`, `docs:`.
- **Testes**: Execute `npm run db:migrate` e `npm run db:seed` antes de submeter PRs.
- **Branches**: Crie branches a partir de `main`. Use `git checkout -b feature/nome-da-feature`.
- **Pull Requests**: Descreva o que foi alterado e por que. Linkue issues quando aplicável.

## Novos Módulos (Módulo 03 e 04)

### Módulo 03 — Comunidades

Adiciona suporte a comunidades de afinidade, território ou estilo.

- **Modelos**: `Community`, `CommunityMember`
- **Rotas**: `/comunidades`, `/comunidades/:id/join`, `/comunidades/:id/leave`, `/comunidades/:id/members`
- **Views**: `src/views/community/` (ainda em desenvolvimento)
- **Testes**: `npm run db:migrate && npm run db:seed`

### Módulo 04 — Biblioteca de Recursos

Permite que a comunidade compartilhe equipamentos, espaços e conhecimento.

- **Modelos**: `Resource`
- **Rotas**: `/recursos`, `/recursos/:id`
- **Views**: `src/views/resource/` (ainda em desenvolvimento)
- **Testes**: `npm run db:migrate && npm run db:seed`

## Autenticação

- Usuários são cadastrados via `/cadastrar` (POST) e `/entrar` (POST).
- Sessão guardada em `express-session` com `SESSION_SECRET` no `.env`.
- Usuário logado tem acesso a rotas protegidas por `requireAuth`.
- Usuário demo: `demo@ondahub.example` / `demo123`.

## Versionamento

- Versões seguem [SemVer](https://semver.org/).
- O arquivo `.env.example` deve ser atualizado com novas variáveis de ambiente.
- Documentação em `docs/product/` deve ser mantida atualizada.

## Testes

```bash
# Migrations
npm run db:migrate

# Seed (dados fictícios)
npm run db:seed

# Rodar o servidor
npm start
```

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.