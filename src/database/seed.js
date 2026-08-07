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

    console.log('✅ Seed concluído com sucesso!');
    console.log(`   - ${events.length} eventos`);
    console.log(`   - ${festivals.length} festivais`);
    console.log('   - Edições de festivais criadas');
    console.log('   - Oportunidades criadas');
    console.log('   - Datas disponíveis criadas');
  } catch (error) {
    console.error('❌ Erro ao executar seed:', error.message);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

seed();