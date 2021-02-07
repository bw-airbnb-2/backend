
const { select } = require("../data/db-config");
const db = require("../data/db-config");

function findBalance(id) {
  return db("cards").where({ id }).select("balance");
}

function findLimit() {
  return db("cards")
    .select(
      "id",
      "card_limit"
    )
}

function findBy(filter) {
  return db("cards").where(filter).orderBy("userId");
}



async function add(card) {
  try {
    const [id] = await db("cards").insert(card, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("cards").where({ id }).select();
}

function update(changes, id) {
  return db("cards")
    .where({ id })
    .select("balance")
    .decrement("balance", changes)
    .update(changes)
    .then((count) => {
      return findById(id);
    });
}



module.exports = {
  add,
  findLimit,
  findBy,
  findById,
  update,
  findBalance

};