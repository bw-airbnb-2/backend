const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};
//TODO Add address, first name, last name, age, birthday, etc to the user model

function find() {
  return db("users")
    .select(
      "id",
      "username",
      "first_name",
      "last_name",
      "address",
      "age",
      "birthday",
      "country"
    )
    .orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}
