# OndaHub

Uma plataforma colaborativa para fortalecer a cena independente.

## Missão

Conectar bandas, produtores, casas de show, profissionais e público através de uma infraestrutura transparente e colaborativa.

## Status

🟢 Módulo 01 — Agenda da Cena (v0.1)

Primeiro módulo funcional desenvolvido: calendário de eventos, festivais, oportunidades e datas disponíveis.

## Funcionalidades

- **Agenda da Cena** — calendário centralizado de eventos;
- **Eventos** — cadastro e página de detalhes;
- **Festivais** — estrutura Festival → Edição → Eventos;
- **Oportunidades** — divulgação de vagas e chamadas abertas;
- **Datas Disponíveis** — disponibilidade de casas de show e bandas.

## Como executar localmente

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

## Banco de dados

- **SQLite** por padrão (desenvolvimento local);
- Suporte a **PostgreSQL**, **MySQL** e **MariaDB** via variáveis de ambiente;
- Configuração centralizada em `src/config/database.js`.

## Documentação

- [Protótipo v0.1](docs/product/001-prototipo-ondahub.md)

## Roadmap

- [x] Pesquisa com bandas
- [x] Módulo 01 — Agenda da Cena
- [ ] Integração com perfis
- [ ] Sistema de inscrições
- [ ] Mapa da cena
- [ ] Agenda pública
- [ ] Notificações

## Como participar

- Responder às pesquisas
- Participar das entrevistas
- Abrir Issues
- Sugerir melhorias
- Testar protótipos
- Contribuir com código