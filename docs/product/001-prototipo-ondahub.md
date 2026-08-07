# OndaHub Prototype v0.1

## Módulo desenvolvido

**Agenda da Cena**

Primeiro módulo funcional do OndaHub, responsável por centralizar informações sobre eventos da cena independente.

> **Versão atual:** v0.2 — [Perfis Profissionais da Cena](002-prototipo-ondahub.md)
>
> O Módulo 02 (Perfil dos Projetos) foi implementado e está documentado no documento `002-prototipo-ondahub.md`.

---

## Por que foi criado

O módulo nasceu dos problemas identificados na pesquisa com artistas e agentes da cena:

- **Falta de calendário centralizado** — eventos espalhados em diferentes redes sociais;
- **Eventos espalhados** — dificuldade para encontrar shows e acompanhar a agenda;
- **Dificuldade de encontrar oportunidades** — falta de transparência sobre vagas e chamadas abertas;
- **Falta de transparência** — dificuldade de descobrir datas disponíveis em casas de show e bandas.

O OndaHub não é uma rede social tradicional, mas uma **infraestrutura comunitária de conexão** para fortalecer a cena independente.

---

## Como foi desenvolvido

### Tecnologias utilizadas

- **Node.js** — runtime JavaScript;
- **Express** — framework web;
- **EJS** — templates de interface;
- **Sequelize** — ORM (Object-Relational Mapping);
- **SQLite** — banco de dados local para desenvolvimento;
- **dotenv** — gerenciamento de variáveis de ambiente.

### Estrutura criada

```
src
├── modules
│   └── agenda
│       ├── controllers   → recebem requisições HTTP
│       ├── models        → definem o schema do banco
│       ├── services      → regras de negócio
│       ├── repositories  → acesso a dados
│       └── views         → templates EJS
├── database              → migrations e seed
├── config                → configuração centralizada
└── docs                  → documentação
```

### Banco de dados

Tabelas criadas:

- `events` — eventos da cena;
- `festivals` — festivais;
- `festival_editions` — edições de festivais;
- `opportunities` — oportunidades abertas;
- `availability_dates` — datas disponíveis.

### Arquitetura

Separação clara entre camadas:

- **Controllers** — lidam com HTTP e renderização;
- **Services** — contêm as regras de negócio;
- **Repositories** — encapsulam o acesso ao banco;
- **Models** — definem o schema via Sequelize.

### Decisões técnicas

1. **Sequelize como ORM** — permite trocar de banco apenas alterando configurações;
2. **Configuração centralizada** — a conexão fica em `src/config/database.js`;
3. **Associação polimórfica** — `availability_dates` usa `entity_type` + `entity_id` para suportar casas de show, bandas e outros agentes;
4. **Estrutura Festival → Edição → Eventos** — modelada com chaves estrangeiras;
5. **Identidade visual Onda Noturna** — preto, branco e vermelho, estética underground/tecnológica.

---

## Banco de dados

### Uso inicial: SQLite

O projeto usa SQLite por padrão para desenvolvimento local. O arquivo do banco fica em `data/ondahub.sqlite`.

### Como configurar outro banco

Copie `.env.example` para `.env` e altere as variáveis:

```env
DATABASE_DRIVER=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=ondahub_prod
DATABASE_USER=usuario
DATABASE_PASSWORD=senha
```

Drivers suportados: `sqlite`, `postgres`, `mysql`, `mariadb`.

### Como migrar para ambiente web

1. Instale o driver do banco desejado (ex.: `pg` para PostgreSQL);
2. Altere as variáveis de ambiente;
3. Execute `npm run db:migrate` para criar as tabelas;
4. Execute `npm run db:seed` para popular com dados iniciais.

---

## Dados de exemplo

### Eventos

- Festival Underground Brasília 2026;
- Metal no Cerrado;
- Noite Rock Independente;
- Onda Noturna Sessions.

### Festivais

- Festival Underground Brasília;
- Rock Cerrado Festival;
- Circuito Independente DF.

### Oportunidades

- Procura-se bandas autorais para festival;
- Vaga para fotógrafo de eventos;
- Festival procura bandas de metal.

### Datas disponíveis

- Casa Underground — datas livres em agosto de 2026;
- Banda — disponibilidade de sextas e sábados.

---

## Como contribuir

### Como executar localmente

```bash
# 1. Instale as dependências
npm install

# 2. Configure o ambiente
cp .env.example .env

# 3. Crie o banco e insira os dados iniciais
npm run db:setup

# 4. Inicie o servidor
npm start
```

Acesse `http://localhost:3000`.

### Como criar melhorias

1. Faça um fork do repositório;
2. Crie uma branch (`git checkout -b feature/nome-da-melhoria`);
3. Implemente a melhoria seguindo a arquitetura existente;
4. Abra um Pull Request descrevendo a mudança.

### Como abrir issues

- Descreva o problema ou sugestão com clareza;
- Informe o ambiente (sistema operacional, versão do Node);
- Inclua passos para reproduzir, se aplicável.

### Como sugerir mudanças

- Abra uma issue com a tag `sugestão`;
- Participe das discussões;
- Contribua com código ou documentação.

---

## Próximos passos

- **Integração com perfis** — conectar eventos a perfis de bandas, produtores e casas de show;
- **Sistema de inscrições** — permitir inscrição em oportunidades diretamente pela plataforma;
- **Mapa da cena** — visualização geográfica dos eventos e espaços;
- **Agenda pública** — calendário público compartilhável;
- **Notificações** — alertas sobre novos eventos e oportunidades.

---

## Princípios

Todo recurso deve responder: **"Como isso fortalece a cena independente?"**

- Código aberto;
- Arquitetura organizada e escalável;
- Documentação completa;
- Facilidade de contribuição;
- Separação entre regras de negócio, interface e infraestrutura;
- Preparação para evolução futura.