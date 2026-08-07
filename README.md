# OndaHub

Uma plataforma colaborativa para fortalecer a cena independente.

## Missão

Conectar bandas, produtores, casas de show, profissionais e público através de uma infraestrutura transparente e colaborativa.

## Status

🟢 Módulo 02 — Perfil dos Projetos (v0.2)

Infraestrutura de identidade profissional integrada à Agenda da Cena.

## Funcionalidades

### Módulo 01 — Agenda da Cena

- **Agenda da Cena** — calendário centralizado de eventos;
- **Eventos** — cadastro e página de detalhes;
- **Festivais** — estrutura Festival → Edição → Eventos;
- **Oportunidades** — divulgação de vagas e chamadas abertas;
- **Datas Disponíveis** — disponibilidade de casas de show e bandas.

### Módulo 02 — Perfil dos Projetos

- **Sistema multi-entidade** — bandas, artistas solo, produtores, casas de show, profissionais e festivais;
- **Perfis profissionais** — portfólio padronizado para descoberta e contratação;
- **Portfólio** — galeria de fotos, vídeos, release, rider técnico e clipping;
- **Lançamentos** — singles, EPs, álbuns e ao vivo com links de streaming;
- **Contatos separados** — públicos (redes sociais) e profissionais (e-mail, WhatsApp);
- **Disponibilidade** — shows, festivais, eventos corporativos e cachê privado;
- **Busca de perfis** — por nome, cidade, estado, tipo e estilo musical;
- **Integração com a Agenda** — próximos eventos exibidos no perfil.

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

- [Protótipo v0.1 — Agenda da Cena](docs/product/001-prototipo-ondahub.md)
- [Protótipo v0.2 — Perfis Profissionais da Cena](docs/product/002-prototipo-ondahub.md)

## Roadmap

- [x] Pesquisa com bandas
- [x] Módulo 01 — Agenda da Cena
- [x] Módulo 02 — Perfil dos Projetos
- [ ] Sistema de inscrições
- [ ] Mapa da cena
- [ ] Agenda pública
- [ ] Notificações
- [ ] Verificação comunitária
- [ ] Press kit automático

## Como participar

- Responder às pesquisas
- Participar das entrevistas
- Abrir Issues
- Sugerir melhorias
- Testar protótipos
- Contribuir com código