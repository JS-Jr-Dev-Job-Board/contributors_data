exports.up = function (knex) {
  return knex.schema.createTable("contributors", (tbl) => {
    tbl.increments();
    tbl.string("contributor_name", 128).notNullable();
    tbl.string("email", 128).notNullable();
    tbl.string("github_link");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("contributors");
};
