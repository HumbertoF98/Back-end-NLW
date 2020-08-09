import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    // pra cada dia da semana pode atender em horários diferentes
    // ex: terça 8h as 10, quarta 11 as 15

    table.integer('week_day').notNullable(); // dia da semana (0 á 6);
    table.integer('from').notNullable(); // horário de inicio de atendimento
    table.integer('to').notNullable(); // até que horário de atendimento

    table.integer('class_id') // gera chave estrangeira de relacionamento de classe
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE'); // caso o horário seja deletado
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}