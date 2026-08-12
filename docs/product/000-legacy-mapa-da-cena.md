# OndaHub Legacy — Mapa da Cena

> Esta versão não foi abandonada por ser tecnicamente inválida. Ela foi preservada porque representa uma etapa anterior da evolução do produto.

---

## Proposta inicial

O OndaHub começou como um **hub/mapa da cena independente**, com o objetivo de centralizar e organizar informações sobre a cena musical independente do Distrito Federal e do Brasil.

A proposta inicial incluía:

- Cadastro de bandas;
- Perfis de projetos;
- Eventos;
- Festivais;
- Oportunidades;
- Agenda;
- Networking;
- Profissionais da cena.

## Problemas que pretendia resolver

A proposta inicial nasceu dos problemas identificados em pesquisa com artistas e agentes da cena:

- **Falta de calendário centralizado** — eventos espalhados em diferentes redes sociais;
- **Eventos espalhados** — dificuldade para encontrar shows e acompanhar a agenda;
- **Dificuldade de encontrar oportunidades** — falta de transparência sobre vagas e chamadas abertas;
- **Falta de transparência** — dificuldade de descobrir datas disponíveis em casas de show e bandas;
- **Dificuldade de apresentar a banda** — cada banda envia material de um jeito diferente;
- **Material espalhado** — informações dispersas em arquivos, links e redes sociais;
- **Falta de padronização** — produtores e casas de show perdem tempo avaliando formatos diferentes.

## Módulos desenvolvidos

### Módulo 01 — Agenda da Cena

- Calendário de eventos;
- Página de detalhes do evento;
- Festivais (estrutura Festival → Edição → Eventos);
- Oportunidades abertas;
- Datas disponíveis.

### Módulo 02 — Perfil dos Projetos

- Sistema multi-entidade (organizations);
- Perfis profissionais (bandas, artistas solo, produtores, casas de show, profissionais, festivais);
- Portfólio (galeria de fotos, vídeos, documentos);
- Lançamentos (single, EP, álbum, ao vivo) com links de streaming;
- Contatos separados (públicos e profissionais);
- Disponibilidade (shows, festivais, eventos corporativos, cachê privado);
- Busca de perfis com filtros;
- Integração com a Agenda da Cena (próximos eventos no perfil).

## Decisões técnicas

| Decisão | Justificativa |
|---------|---------------|
| **Node.js + Express** | Runtime e framework web amplamente adotados, com grande ecossistema |
| **EJS** | Templates simples e familiares, sem curva de aprendizado |
| **Sequelize ORM** | Permite trocar de banco apenas alterando configurações |
| **SQLite** | Banco local para desenvolvimento, sem necessidade de servidor |
| **Configuração centralizada** | Conexão em `src/config/database.js`, preparada para PostgreSQL/MySQL |
| **Arquitetura em camadas** | controllers → services → repositories → models → views |
| **Perfil não social** | Sem seguidores, curtidas, feed ou stories — foco em descoberta e contratação |
| **Cachê privado** | Valor do cachê marcado como privado por padrão |

## Por que essa direção foi posteriormente alterada

Durante o desenvolvimento, a Onda Noturna conheceu o **Setorial Cultura Rock** e tomou conhecimento do **Portal Mapa do Rock Brasil**.

O Mapa do Rock já possui uma proposta relacionada ao mapeamento da cadeia produtiva do rock, agentes culturais, festivais, indicadores e inteligência cultural.

Manter o OndaHub focado em mapeamento poderia gerar **duplicação de esforços** com o Mapa do Rock.

A decisão estratégica foi **não competir** com o Mapa do Rock e reposicionar o OndaHub como:

> **Infraestrutura comunitária de colaboração e ativação da cena.**

## Partes que podem ser reaproveitadas no novo OndaHub

O código existente não é descartável. As seguintes partes permanecem válidas e podem ser reaproveitadas:

- **Perfis profissionais** — sistema multi-entidade (organizations) com portfólio, lançamentos e contatos;
- **Entidades** — estrutura base para bandas, produtores, casas de show e profissionais;
- **Eventos e agenda** — infraestrutura de apoio para o novo direcionamento;
- **Oportunidades** — base para o futuro Mural de Oportunidades;
- **Banco de dados** — schema e configuração centralizada;
- **Sistema de configuração** — variáveis de ambiente e drivers de banco;
- **Arquitetura** — separação em controllers, services, repositories, models e views;
- **Identidade visual** — estética Onda Noturna (preto, branco, vermelho);
- **Documentação** — protótipos 001 e 002 registram a evolução histórica.

---

## Histórico de commits

- `8b48545` — Initial commit
- `0680cf2` — Add initial documentation and chapter files
- `c53b912` — feat: implementa o Módulo 01 - Agenda da Cena
- `f96a885` — feat: implementa modulo 02 - Perfil dos Projetos

---

## Status

Esta branch (`legacy/mapa-da-cena`) preserva o estado do projeto na fase de hub/mapa da cena.

O código permanece disponível para consulta, aprendizado e eventual reaproveitamento.

O novo ciclo de desenvolvimento do OndaHub será documentado a partir do reposicionamento estratégico.