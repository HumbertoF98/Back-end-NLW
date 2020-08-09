import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id') // gera chave estrangeira de relacionamento de usuário e aula
      .notNullable()         // saber quem é o usuário que ta dando a aula
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE'); // caso o usuário seja deletado, deleta todas as aulas junto
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}