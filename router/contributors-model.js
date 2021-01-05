const db = require("../data/db-config");

module.exports = {
  addContributor(contributor) {
    return db("contributors")
      .insert(contributor)
      .then(() => this.getContributors());
  },
  getContributors() {
    return db("contributors").select("*");
  },
  getContributorById(id) {
    return db("contributors").where({ id }).first();
  },
  editContributorById(edit, id) {
    return db("contributors")
      .where({ id })
      .update(edit)
      .then((count) => (count > 0 ? this.getContributorById(id) : null));
  },
  deleteContributor(id) {
    return db("contributors")
      .where({ id })
      .del()
      .then(() => this.getContributors());
  },
};
