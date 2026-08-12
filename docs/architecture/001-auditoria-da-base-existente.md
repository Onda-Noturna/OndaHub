# Auditoria da Base Existente

> Relatório de auditoria da base atual do OndaHub, realizado antes da transformação para a nova direção (infraestrutura comunitária de colaboração e ativação da cena).

---

## Visão geral

| Item | Valor |
|------|-------|
| **Linguagem** | JavaScript (Node.js) |
| **Framework** | Express |
| **Templates** | EJS + express-ejs-layouts |
| **ORM** | Sequelize |
| **Banco de dados** | SQLite (dev) — configurável para PostgreSQL/MySQL/MariaDB |
| **Entrypoint** | `server.js` |
| **Versionamento** | `package.json` (v0.1.0) |
| **Autenticação** | **Não existe** — precisa ser implementada |
| **Testes** | Não existem testes automatizados |

---

## Estrutura de arquivos

```
server.js                          → entrypoint Express
src/
├── config/
│   └── database.js                 → configuração centralizada do banco
├── database/
│   ├── migrate.js                  → sincronização de modelos (Sequelize)
│   └── seed.js                     → dados fictícios iniciais
├── modules/
│   ├── agenda/
│   │   ├── controllers/            → Event, Festival, Opportunity, AvailabilityDate
│   │   ├── models/                 → Event, Festival, FestivalEdition, Opportunity, AvailabilityDate
│   │   ├── services/               → regras de negócio
│   │   ├── repositories/           → acesso a dados
│   │   ├── routes.js               → rotas do módulo
│   │   └── views/                  → templates EJS
│   └── profiles/
│       ├── controllers/            → OrganizationController
│       ├── models/                 → Organization, Perfil, Portfólio, Release, Contatos, Availability
│       ├── services/               → OrganizationService
│       ├── repositories/           → OrganizationRepository
│       ├── routes.js               → rotas do módulo
│       └── views/                  → templates EJS
├── views/                          → layout, error
public/css/                         → style.css (identidade Onda Noturna)
docs/
├── architecture/                   → este relatório
└── product/                        → documentação de produto
```

---

## Classificação por componente

### REUTILIZAR

| Componente | Justificativa |
|------------|---------------|
| `src/config/database.js` | Configuração centralizada, multi-driver, pronta para produção |
| `src/database/migrate.js` | Sincronização de modelos via Sequelize funciona bem |
| `src/database/seed.js` | Seed com dados fictícios, extensível |
| Modelos do módulo `agenda` | Event, Festival, Opportunity, AvailabilityDate — reaproveitáveis |
| Modelos do módulo `profiles` | Organization, perfil, portfólio, lançamentos, contatos, disponibilidade |
| Controllers/Services/Repositories agenda | Camadas bem separadas |
| Controllers/Services/Repositories profiles | Camadas bem separadas |
| Views EJS | Templates reutilizáveis da identidade visual |
| `public/css/style.css` | Identidade Onda Noturna (preto, branco, vermelho), responsivo |
| `server.js` | Entrypoint limpo, fácil de estender |

### REFATORAR

| Componente | Justificativa |
|------------|---------------|
| `src/modules/agenda/models/Opportunity.js` | O modelo Opportunity existe mas precisa ser generalizado para os novos tipos (show, festival, edital, freela, parceria, permuta, voluntariado, procura-se profissional/artista) |

### ARQUIVAR

| Componente | Justificativa |
|------------|---------------|
| Nenhum | Não há componentes a arquivar neste momento |

### REMOVER

| Componente | Justificativa |
|------------|---------------|
| Nenhum | Nada deve ser removido sem necessidade — princípio desta tarefa |

### NÃO MEXER

| Componente | Justificativa |
|------------|---------------|
| Branch `legacy/mapa-da-cena` | Representa a versão histórica preservada |
| Documentação 001 e 002 | Representam a evolução histórica do produto |
| Configuração de banco | Já está correta e preparada para produção |

---

## Novas necessidades identificadas

### Autenticação (NÃO EXISTE — IMPLEMENTAR)

Não existe sistema de usuários, login, logout, cadastro, sessão ou hash de senha.

Modelo conceitual a implementar:

```
User
 |
 +-- Profile
 |
 +-- Membership
       |
       +-- Organization / Project
```

### Novos módulos (base para expansão)

- **Oportunidades** — generalizar o modelo existente para os novos tipos;
- **Projetos colaborativos** — nova estrutura (CollaborativeProject + ProjectMember);
- **Comunidades** — nova estrutura (Community + CommunityMember);
- **Recursos** — nova estrutura (Resource).

---

## Conclusão

A base existente é **sólida e bem estruturada**. A maioria dos componentes pode ser **reutilizada** sem grandes alterações.

As principais lacunas são:

1. **Autenticação** — não existe e é necessária para o novo modelo de usuários;
2. **Generalização do Opportunity** — o modelo atual não cobre os novos tipos;
3. **Novos módulos** — projetos, comunidades e recursos precisam de base inicial.

A transformação seguirá o princípio: **reutilize antes de reescrever**.