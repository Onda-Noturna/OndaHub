# OndaHub

Uma plataforma colaborativa para fortalecer a cena independente.

## Missão

Conectar bandas, produtores, casas de show, profissionais e público através de uma infraestrutura transparente e colaborativa.

## Estado atual do projeto

O OndaHub está passando por um **reposicionamento estratégico**.

A proposta inicial era um hub/mapa da cena independente. Após conhecer o Setorial Cultura Rock e o Portal Mapa do Rock Brasil, a Onda Noturna decidiu **não competir** com o Mapa do Rock e reposicionar o OndaHub como:

> **Infraestrutura comunitária de colaboração e ativação da cena.**

### Histórico

**Versão inicial:**
Mapa/hub da cena — cadastro de bandas, perfis, eventos, festivais, oportunidades, agenda, networking e profissionais da cena.

**Nova direção:**
Infraestrutura comunitária de colaboração — oportunidades, projetos, comunidades, recursos compartilhados e produção.

### Documentação

- [Protótipo v0.1 — Agenda da Cena](docs/product/001-prototipo-ondahub.md)
- [Protótipo v0.2 — Perfis Profissionais da Cena](docs/product/002-prototipo-ondahub.md)
- [Reposicionamento Estratégico](docs/product/003-reposicionamento-estrategico.md)
- [Roadmap do Novo Ciclo](docs/product/004-roadmap-novo-ondahub.md)

---

## Funcionalidades existentes (fase inicial)

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

## Roadmap

- [x] Pesquisa com bandas
- [x] Módulo 01 — Agenda da Cena
- [x] Módulo 02 — Perfil dos Projetos
- [ ] Reposicionamento estratégico (documentado)
- [ ] Mural de oportunidades
- [ ] Projetos colaborativos
- [ ] Comunidades
- [ ] Biblioteca de recursos
- [ ] Agenda como infraestrutura de apoio

## Como participar

- Responder às pesquisas
- Participar das entrevistas
- Abrir Issues
- Sugerir melhorias
- Testar protótipos
- Contribuir com código