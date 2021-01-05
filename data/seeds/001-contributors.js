exports.seed = function (knex) {
  return knex("contributors").insert([
    {
      contributor_name: "justin",
      email: "justin@fake.com",
      github_link: "test1",
    },
    {
      contributor_name: "will",
      email: "will@fake.com",
      github_link: "test2",
    },
    {
      contributor_name: "mike",
      email: "mike@fake.com",
      github_link: "test3",
    },
  ]);
};
