# OndaHub — Reposicionamento Estratégico

## 1. Contexto

O OndaHub nasceu como uma plataforma open source da **Onda Noturna** com o objetivo de fortalecer a cena independente.

A proposta inicial era criar um **hub/mapa da cena independente**, com foco em:

- Cadastro de bandas;
- Perfis de projetos;
- Eventos;
- Festivais;
- Oportunidades;
- Agenda;
- Networking;
- Profissionais da cena.

Foram desenvolvidos dois módulos funcionais:

- **Módulo 01 — Agenda da Cena** (calendário de eventos, festivais, oportunidades, datas disponíveis);
- **Módulo 02 — Perfil dos Projetos** (sistema multi-entidade, perfis profissionais, portfólio, lançamentos, contatos, disponibilidade).

## 2. Descoberta

Durante o desenvolvimento, a Onda Noturna conheceu o **Setorial Cultura Rock** e tomou conhecimento do **Portal Mapa do Rock Brasil**.

O Mapa do Rock já possui uma proposta relacionada ao mapeamento da cadeia produtiva do rock, agentes culturais, festivais, indicadores e inteligência cultural.

O Mapa do Rock **não é um concorrente** — é uma iniciativa complementar que já atua no campo do mapeamento e da inteligência cultural.

## 3. Problema identificado

Manter o OndaHub focado em mapeamento poderia gerar **duplicação de esforços** com o Mapa do Rock.

Construir um novo mapa da cena, com cadastro massivo de agentes e indicadores, seria:

- Redundante com o trabalho já existente;
- Dispersivo para a comunidade;
- Contrário ao princípio de colaboração que orienta o projeto.

## 4. Nova direção

O OndaHub passa a ser:

> **Infraestrutura comunitária de colaboração e ativação da cena.**

O foco deixa de ser **mapear a cena** e passa a ser **ajudar a cena a fazer coisas juntas**.

## 5. Divisão conceitual

### Mapa do Rock

- Mapeamento;
- Dados;
- Indicadores;
- Inteligência;
- Relatórios;
- Políticas públicas.

### OndaHub

- Colaboração;
- Oportunidades;
- Projetos;
- Comunidades;
- Recursos compartilhados;
- Produção.

### Onda Noturna

- Comunicação;
- Mobilização;
- Educação;
- Rádio;
- Eventos;
- Engajamento.

## 6. O que continua válido

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

## 7. O que será rebaixado de prioridade

- Mapa;
- Cadastro massivo;
- Calendário como produto principal;
- Integrações sociais;
- Funcionalidades de descoberta baseadas em popularidade.

## 8. Nova prioridade

1. **Mural de oportunidades** — centralizar chamadas, vagas e oportunidades da cena;
2. **Projetos colaborativos** — apoiar a criação e gestão de projetos comunitários;
3. **Comunidades** — espaços de organização por afinidade e território;
4. **Biblioteca de recursos** — materiais, guias e ferramentas compartilhadas;
5. **Perfis profissionais** — manter e evoluir o sistema de identidade profissional;
6. **Agenda como infraestrutura de apoio** — a agenda deixa de ser o produto principal e passa a apoiar os demais recursos.

## 9. Relação com o ecossistema

- O OndaHub é **independente**;
- O OndaHub **não representa** o Setorial;
- O OndaHub **não representa** o Mapa do Rock;
- **Não existe integração técnica** entre OndaHub e Mapa do Rock neste momento;
- Qualquer integração futura dependerá de **diálogo e autorização**.

## 10. Princípio

> O OndaHub não precisa mapear novamente a cena se puder ajudar a cena a fazer coisas juntas.

---

## Nota sobre versionamento

A numeração dos protótipos representa a **evolução histórica** do projeto:

- `001-prototipo-ondahub.md` — Módulo 01 (Agenda da Cena);
- `002-prototipo-ondahub.md` — Módulo 02 (Perfil dos Projetos);
- `003-reposicionamento-estrategico.md` — este documento;
- `004-roadmap-novo-ondahub.md` — roadmap do novo ciclo.

Os documentos antigos **não foram reescritos** para refletir a nova direção. A transparência histórica é importante: o projeto evoluiu, e essa evolução está documentada.