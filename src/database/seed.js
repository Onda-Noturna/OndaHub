/**
 * OndaHub — Dados fictícios iniciais (seed)
 *
 * Popula o banco com exemplos para desenvolvimento e demonstração.
 *
 * Uso: npm run db:seed
 */

const sequelize = require('../config/database');
const {
  Event,
  Festival,
  FestivalEdition,
  Opportunity,
  AvailabilityDate,
} = require('../modules/agenda/models');
const {
  Organization,
  OrganizationProfile,
  OrganizationImage,
  OrganizationVideo,
  OrganizationDocument,
  Release,
  ReleaseLink,
  PublicContact,
  ProfessionalContact,
  Availability,
} = require('../modules/profiles/models');

async function seed() {
  try {
    console.log('🔄 Conectando ao banco de dados...');
    await sequelize.authenticate();
    console.log(`✅ Conexão estabelecida (driver: ${sequelize.getDialect()})`);

    console.log('🔄 Inserindo dados fictícios...');

    // ==========================================
    // EVENTOS
    // ==========================================
    const events = await Event.bulkCreate(
      [
        {
          title: 'Festival Underground Brasília 2026',
          description:
            'A maior celebração da cena underground de Brasília. Três dias de rock, metal e cultura independente.',
          date: '2026-09-20',
          start_time: '14:00',
          end_time: '23:59',
          location: 'Casa Underground',
          city: 'Brasília',
          state: 'DF',
          image: '',
          external_link: 'https://onhub.example/festival-underground-2026',
          responsible: 'Coletivo Underground',
          status: 'confirmado',
        },
        {
          title: 'Metal no Cerrado',
          description:
            'Noite de metal com as principais bandas autorais do cerrado brasileiro.',
          date: '2026-10-10',
          start_time: '19:00',
          end_time: '23:00',
          location: 'Galpão do Rock',
          city: 'Brasília',
          state: 'DF',
          image: '',
          external_link: 'https://onhub.example/metal-no-cerrado',
          responsible: 'Produções Cerrado',
          status: 'planejado',
        },
        {
          title: 'Noite Rock Independente',
          description:
            'Show colaborativo reunindo bandas independentes de diversos estilos do rock.',
          date: '2026-08-22',
          start_time: '20:00',
          end_time: '22:30',
          location: 'Casa Underground',
          city: 'Brasília',
          state: 'DF',
          image: '',
          external_link: 'https://onhub.example/noite-rock-independente',
          responsible: 'Coletivo Underground',
          status: 'confirmado',
        },
        {
          title: 'Onda Noturna Sessions',
          description:
            'Sessão especial da Onda Noturna com apresentações acústicas de artistas da cena.',
          date: '2026-07-05',
          start_time: '19:30',
          end_time: '21:30',
          location: 'Estúdio Onda',
          city: 'Brasília',
          state: 'DF',
          image: '',
          external_link: 'https://onhub.example/onda-noturna-sessions',
          responsible: 'Onda Noturna',
          status: 'finalizado',
        },
      ],
      {}
    );

    // ==========================================
    // FESTIVAIS
    // ==========================================
    const festivals = await Festival.bulkCreate(
      [
        {
          name: 'Festival Underground Brasília',
          description:
            'Festival anual que celebra a cena underground de Brasília com rock, metal e arte independente.',
          organization: 'Coletivo Underground',
          city: 'Brasília',
          state: 'DF',
        },
        {
          name: 'Rock Cerrado Festival',
          description:
            'Festival que reúne o melhor do rock autoral produzido no cerrado brasileiro.',
          organization: 'Produções Cerrado',
          city: 'Brasília',
          state: 'DF',
        },
        {
          name: 'Circuito Independente DF',
          description:
            'Circuito de eventos que percorre o Distrito Federal conectando bandas, casas de show e público.',
          organization: 'Onda Noturna',
          city: 'Brasília',
          state: 'DF',
        },
      ],
      {}
    );

    // ==========================================
    // EDIÇÕES DE FESTIVAIS
    // ==========================================
    await FestivalEdition.bulkCreate(
      [
        {
          festival_id: festivals[0].id,
          year: 2026,
          start_date: '2026-09-20',
          end_date: '2026-09-22',
          status: 'confirmado',
        },
        {
          festival_id: festivals[1].id,
          year: 2026,
          start_date: '2026-10-10',
          end_date: '2026-10-10',
          status: 'planejado',
        },
        {
          festival_id: festivals[2].id,
          year: 2026,
          start_date: '2026-07-05',
          end_date: '2026-07-05',
          status: 'finalizado',
        },
      ],
      {}
    );

    // ==========================================
    // OPORTUNIDADES
    // ==========================================
    await Opportunity.bulkCreate(
      [
        {
          title: 'Procura-se bandas autorais para festival',
          description:
            'Festival do cerrado está selecionando bandas autorais de rock e metal. Envie seu material até o prazo.',
          category: 'banda',
          responsible: 'Produções Cerrado',
          deadline: '2026-09-30',
          status: 'aberta',
        },
        {
          title: 'Vaga para fotógrafo de eventos',
          description:
            'Procuramos fotógrafo(a) para registrar shows da cena independente em Brasília.',
          category: 'fotografo',
          responsible: 'Coletivo Underground',
          deadline: '2026-08-15',
          status: 'aberta',
        },
        {
          title: 'Festival procura bandas de metal',
          description:
            'Seleção de bandas de metal para a edição 2027 do Festival Underground Brasília.',
          category: 'banda',
          responsible: 'Coletivo Underground',
          deadline: '2026-12-01',
          status: 'aberta',
        },
      ],
      {}
    );

    // ==========================================
    // DATAS DISPONÍVEIS
    // ==========================================
    await AvailabilityDate.bulkCreate(
      [
        // Casa de show: datas livres
        { entity_type: 'venue', entity_id: 1, date: '2026-08-15', description: 'Casa Underground' },
        { entity_type: 'venue', entity_id: 1, date: '2026-08-22', description: 'Casa Underground' },
        { entity_type: 'venue', entity_id: 1, date: '2026-08-29', description: 'Casa Underground' },
        // Banda: disponibilidade geral (datas ilustrativas)
        { entity_type: 'band', entity_id: 1, date: '2026-09-05', description: 'Sextas e sábados — Brasília e região' },
        { entity_type: 'band', entity_id: 1, date: '2026-09-06', description: 'Sextas e sábados — Brasília e região' },
        { entity_type: 'band', entity_id: 1, date: '2026-09-12', description: 'Sextas e sábados — Brasília e região' },
      ],
      {}
    );

    // ==========================================
    // MÓDULO 02 — PERFIS DOS PROJETOS
    // ==========================================

    // --- Bandas ---
    const fallen = await Organization.create({
      type: 'band',
      name: 'Fallen Evanescence Tributo',
      slug: 'fallen-evanescence-tributo',
      city: 'Brasília',
      state: 'DF',
    });
    await OrganizationProfile.create({
      organization_id: fallen.id,
      short_description: 'Banda tributo ao Evanescence de Brasília formada em 2024.',
      full_description: 'A Fallen é uma banda tributo ao Evanescence de Brasília formada em 2024. Especializada em metal alternativo, a banda apresenta um show completo com os maiores sucessos do Evanescence.',
      founded_year: 2024,
      status: 'ativo',
      genre: 'Metal alternativo, Tributo',
    });
    await OrganizationImage.create({
      organization_id: fallen.id,
      path: '/images/placeholders/fallen-1.jpg',
      caption: 'Show no Onda Sessions',
      is_featured: true,
      order: 1,
    });
    await OrganizationVideo.create({
      organization_id: fallen.id,
      title: 'Live no Onda Sessions',
      url: 'https://youtube.com/watch?v=fallen-live',
      platform: 'youtube',
    });
    await OrganizationDocument.create({
      organization_id: fallen.id,
      type: 'release',
      title: 'Release da Fallen',
      content: 'Banda tributo ao Evanescence com show completo de 90 minutos.',
    });
    await OrganizationDocument.create({
      organization_id: fallen.id,
      type: 'rider',
      title: 'Rider técnico',
      content: 'P.A. mínimo 2000W, 2 retornos, 8 canais.',
    });
    const fallenRelease1 = await Release.create({
      organization_id: fallen.id,
      title: 'Live no Onda Sessions',
      type: 'ao_vivo',
      release_date: '2026-07-05',
      description: 'Registro ao vivo da apresentação no Onda Sessions.',
    });
    await ReleaseLink.create({
      release_id: fallenRelease1.id,
      platform: 'youtube',
      url: 'https://youtube.com/watch?v=fallen-live',
    });
    const fallenRelease2 = await Release.create({
      organization_id: fallen.id,
      title: 'Tribute Session 2026',
      type: 'ep',
      release_date: '2026-03-15',
      description: 'EP com as melhores versões tributo.',
    });
    await ReleaseLink.create({
      release_id: fallenRelease2.id,
      platform: 'spotify',
      url: 'https://open.spotify.com/album/fallen-tribute',
    });
    await PublicContact.create({
      organization_id: fallen.id,
      platform: 'instagram',
      url: 'https://instagram.com/fallen.tributo',
    });
    await PublicContact.create({
      organization_id: fallen.id,
      platform: 'youtube',
      url: 'https://youtube.com/@fallentributo',
    });
    await ProfessionalContact.create({
      organization_id: fallen.id,
      name: 'Amanda',
      email: 'fallen.contato@example.com',
      phone: '(61) 99999-0001',
      whatsapp: '(61) 99999-0001',
      public_whatsapp: true,
    });
    await Availability.create({
      organization_id: fallen.id,
      accepts_shows: true,
      accepts_festivals: true,
      accepts_corporate: false,
      region: 'Brasília e região',
      preferred_days: 'Sextas e sábados',
      needs_support: false,
      cache_value: 'A combinar',
      cache_private: true,
    });

    const arkana = await Organization.create({
      type: 'band',
      name: 'Arkana',
      slug: 'arkana',
      city: 'Brasília',
      state: 'DF',
    });
    await OrganizationProfile.create({
      organization_id: arkana.id,
      short_description: 'Banda autoral de heavy metal do cerrado.',
      full_description: 'A Arkana é uma banda autoral de heavy metal formada em Brasília, com influências do metal clássico e moderno.',
      founded_year: 2020,
      status: 'ativo',
      genre: 'Heavy Metal, Autoral',
    });
    await PublicContact.create({
      organization_id: arkana.id,
      platform: 'instagram',
      url: 'https://instagram.com/arkana.metal',
    });
    await ProfessionalContact.create({
      organization_id: arkana.id,
      name: 'Lucas',
      email: 'arkana.contato@example.com',
      phone: '(61) 99999-0002',
      whatsapp: '(61) 99999-0002',
      public_whatsapp: false,
    });
    await Availability.create({
      organization_id: arkana.id,
      accepts_shows: true,
      accepts_festivals: true,
      accepts_corporate: false,
      region: 'Centro-Oeste',
      preferred_days: 'Fins de semana',
      needs_support: true,
      cache_value: 'A combinar',
      cache_private: true,
    });

    // --- Produtores ---
    const coletivo = await Organization.create({
      type: 'producer',
      name: 'Coletivo Underground',
      slug: 'coletivo-underground',
      city: 'Brasília',
      state: 'DF',
    });
    await OrganizationProfile.create({
      organization_id: coletivo.id,
      short_description: 'Produtora de eventos da cena underground de Brasília.',
      full_description: 'O Coletivo Underground produz eventos de rock, metal e cultura independente no Distrito Federal desde 2022.',
      founded_year: 2022,
      status: 'ativo',
    });
    await PublicContact.create({
      organization_id: coletivo.id,
      platform: 'instagram',
      url: 'https://instagram.com/coletivo.underground',
    });
    await ProfessionalContact.create({
      organization_id: coletivo.id,
      name: 'João',
      email: 'coletivo@example.com',
      phone: '(61) 99999-0003',
      whatsapp: '(61) 99999-0003',
      public_whatsapp: true,
    });

    // --- Casas de show ---
    const casaUnderground = await Organization.create({
      type: 'venue',
      name: 'Casa Underground',
      slug: 'casa-underground',
      city: 'Brasília',
      state: 'DF',
    });
    await OrganizationProfile.create({
      organization_id: casaUnderground.id,
      short_description: 'Casa de shows dedicada à cena independente.',
      full_description: 'A Casa Underground é um espaço dedicado a shows da cena independente, com estrutura completa para eventos de rock e metal.',
      founded_year: 2019,
      status: 'ativo',
      capacity: 300,
      address: 'Setor de Indústrias, Brasília - DF',
      equipment: 'P.A. 5000W, iluminação LED, palco 6x4m',
      has_stage: true,
      has_pa: true,
      has_lighting: true,
    });
    await PublicContact.create({
      organization_id: casaUnderground.id,
      platform: 'instagram',
      url: 'https://instagram.com/casa.underground',
    });
    await ProfessionalContact.create({
      organization_id: casaUnderground.id,
      name: 'Maria',
      email: 'casa@example.com',
      phone: '(61) 99999-0004',
      whatsapp: '(61) 99999-0004',
      public_whatsapp: true,
    });

    // --- Profissionais ---
    const mariaFoto = await Organization.create({
      type: 'professional',
      name: 'Maria Fotografia',
      slug: 'maria-fotografia',
      city: 'Brasília',
      state: 'DF',
    });
    await OrganizationProfile.create({
      organization_id: mariaFoto.id,
      short_description: 'Fotógrafa especializada em shows e ensaios.',
      full_description: 'Maria é fotógrafa profissional especializada em shows ao vivo, ensaios de bandas e cobertura de eventos da cena independente.',
      founded_year: 2021,
      status: 'ativo',
      category: 'Fotógrafo',
      price_range: 'A combinar',
    });
    await PublicContact.create({
      organization_id: mariaFoto.id,
      platform: 'instagram',
      url: 'https://instagram.com/maria.fotografia',
    });
    await ProfessionalContact.create({
      organization_id: mariaFoto.id,
      name: 'Maria',
      email: 'maria.foto@example.com',
      phone: '(61) 99999-0005',
      whatsapp: '(61) 99999-0005',
      public_whatsapp: true,
    });
    await Availability.create({
      organization_id: mariaFoto.id,
      accepts_shows: true,
      accepts_festivals: true,
      accepts_corporate: true,
      region: 'Brasília e região',
      preferred_days: 'Todos os dias',
      needs_support: false,
      cache_value: 'A combinar',
      cache_private: true,
    });

    console.log('✅ Seed concluído com sucesso!');
    console.log(`   - ${events.length} eventos`);
    console.log(`   - ${festivals.length} festivais`);
    console.log('   - Edições de festivais criadas');
    console.log('   - Oportunidades criadas');
    console.log('   - Datas disponíveis criadas');
    console.log('   - Perfis de organizações criados (Módulo 02)');
  } catch (error) {
    console.error('❌ Erro ao executar seed:', error.message);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

seed();