# OndaHub Prototype v0.2 — Perfis Profissionais da Cena

## Módulo desenvolvido

**Perfil dos Projetos**

Segundo módulo funcional do OndaHub, responsável por criar uma identidade profissional padronizada para cada participante do ecossistema — bandas, artistas solo, produtores, casas de show, profissionais criativos e festivais.

---

## O que foi desenvolvido

- **Sistema multi-entidade** — estrutura base `organizations` que permite que um usuário administre múltiplas entidades;
- **Perfis profissionais** — cartão profissional padronizado com identidade, apresentação, portfólio, lançamentos e contatos;
- **Portfólio modular** — galeria de fotos, vídeos (YouTube/Vimeo), documentos (release, rider técnico, clipping);
- **Lançamentos** — estrutura própria com tipo (single, EP, álbum, ao vivo) e links de streaming;
- **Contatos públicos e profissionais** — separação clara entre redes sociais e contatos para contratação;
- **Disponibilidade** — aceita shows, festivais, eventos corporativos, região, dias preferenciais e cachê privado;
- **Busca de perfis** — busca textual com filtros por tipo, cidade, estado e estilo musical.

## Módulo 03 — Comunidades (adicional)

Adiciona suporte a comunidades de afinidade, território ou estilo musical.

- **Modelos**: `Community`, `CommunityMember`
- **Tipos de comunidade**: `territorio`, `estilo`, `profissao`, `projeto`, `organizacao`
- **Papéis**: `membro`, `moderador`, `admin`
- **Rotas principais**:
  - `GET /comunidades` — Listar todas as comunidades
  - `GET /comunidades/:id` — Detalhes da comunidade
  - `POST /comunidades/:id/join` — Entrar na comunidade
  - `POST /comunidades/:id/leave` — Sair da comunidade
  - `GET /comunidades/:id/members` — Listar membros

## Módulo 04 — Biblioteca de Recursos (adicional)

Permite o compartilhamento de equipamentos, espaços e conhecimento entre os membros da cena.

- **Modelos**: `Resource`
- **Tipos de recurso**: `equipamento`, `espaco`, `conhecimento`, `contato`, `material`
- **Rotas principais**:
  - `GET /recursos` — Listar todos os recursos
  - `GET /recursos/:id` — Detalhes do recurso
  - `POST /recursos` — Criar um novo recurso
  - `PUT /recursos/:id` — Atualizar um recurso
  - `DELETE /recursos/:id` — Remover um recurso

---

## Por que foi desenvolvido

O módulo nasceu dos problemas identificados na pesquisa:

- **Dificuldade de apresentar a banda** — cada banda envia material de um jeito diferente;
- **Material espalhado** — informações ficam dispersas em arquivos, links e redes sociais;
- **Falta de padronização** — produtores e casas de show perdem tempo avaliando formatos diferentes;
- **Dificuldade para produtores encontrarem informações** — falta de uma central de informações confiável.

O perfil **NÃO é uma rede social** — não há seguidores, curtidas, feed ou stories. O foco é **descoberta e conexão profissional**.

---

## Decisões importantes

1. **Perfil não social** — sem feed, sem curtidas, sem sistema de seguidores; foco em contratação e descoberta;
2. **Separação entre contatos públicos e profissionais** — redes sociais ficam públicas; e-mail, telefone e WhatsApp ficam na área profissional; o WhatsApp pode ser opcionalmente exibido publicamente;
3. **Cachê privado** — o valor do cachê é marcado como `cache_private = true` por padrão, nunca exposto publicamente;
4. **Arquitetura multi-entidade** — um usuário pode administrar uma banda, um festival e um perfil profissional simultaneamente.

---

## Banco de dados

### Novas tabelas

- `organizations` — entidade base (tipo, nome, slug, cidade, estado);
- `organization_profiles` — identidade do perfil (descrição, ano de criação, status, logo, banner, gênero, campos por tipo);
- `organization_images` — galeria de fotos;
- `organization_videos` — vídeos do portfólio;
- `organization_documents` — release, rider técnico, clipping;
- `releases` — lançamentos (single, EP, álbum, ao vivo);
- `release_links` — links de streaming associados aos lançamentos;
- `public_contacts` — redes sociais e links públicos;
- `professional_contacts` — contatos profissionais (e-mail, telefone, WhatsApp);
- `availabilities` — disponibilidade para shows, festivais, eventos corporativos, cachê.

### Relacionamentos

```
organizations (1) → (1) organization_profiles
organizations (1) → (N) organization_images
organizations (1) → (N) organization_videos
organizations (1) → (N) organization_documents
organizations (1) → (N) releases
organizations (1) → (1) availabilities
releases (1) → (N) release_links
```

### Compatibilidade

- Configuração centralizada em `src/config/database.js`;
- SQLite para desenvolvimento local;
- PostgreSQL/MySQL/MariaDB para produção — basta alterar variáveis de ambiente.

---

## Integração com Agenda da Cena

Os módulos se conectam sem duplicar dados:

- **Na página do perfil** é exibida a seção "Próximos eventos", que busca automaticamente eventos futuros da Agenda da Cena;
- **Eventos da cena** podem ser relacionados a bandas, produtores e casas de show cadastradas;
- A busca de perfis permite encontrar entidades e, a partir delas, navegar para os eventos relacionados.

---

## Dados de exemplo

### Bandas
- **Fallen Evanescence Tributo** — Brasília/DF — Metal alternativo, Tributo;
- **Arkana** — Brasília/DF — Heavy Metal, Autoral.

### Produtores
- **Coletivo Underground** — Brasília/DF.

### Casas de show
- **Casa Underground** — Brasília/DF — capacidade 300 pessoas.

### Profissionais
- **Maria Fotografia** — Brasília/DF — Fotógrafa especializada em shows.

Cada entidade inclui lançamentos, contatos, disponibilidade e links de exemplo.

---

## Como contribuir

### Executar localmente

```bash
npm install
cp .env.example .env
npm run db:setup
npm start
```

Acesse `http://localhost:3000`.

### Criar novas entidades

- Abra uma issue sugerindo o novo tipo de entidade;
- Implemente seguindo a estrutura `organizations` existente;
- Adicione campos específicos no `organization_profiles`.

### Melhorar filtros

- A busca atual suporta nome, cidade, estado, tipo e gênero;
- Sugira novos filtros abrindo uma issue;
- Implemente no `OrganizationRepository`.

### Melhorar portfólio

- Adicione novas seções de portfólio;
- Suporte a upload local de imagens e PDFs;
- Integração com serviços de streaming.

### Abrir issues

- Descreva o problema ou sugestão com clareza;
- Informe o ambiente (SO, versão do Node);
- Inclua passos para reproduzir.

---

## Ideias para futuras versões

- **Verificação comunitária** — sistema de verificação de perfis pela comunidade;
- **Estatísticas de shows** — histórico e estatísticas de apresentações;
- **Press kit automático** — geração automática de material de imprensa;
- **Compartilhamento por QR Code** — compartilhar o perfil via QR Code;
- **Integração com Spotify API** — puxar discografia automaticamente;
- **Mapa da cena** — visualização geográfica dos perfis.

---

## Princípios

Toda funcionalidade deve responder: **"Isso ajuda a cena independente a se conectar melhor?"**

- Sem seguidores;
- Sem feed social;
- Sem curtidas;
- Sem stories;
- Priorizar descoberta e conexão;
- Manter o projeto simples e contributivo;
- Pensar em acessibilidade;
- Pensar em internacionalização futura;
- Manter arquitetura open source clara.