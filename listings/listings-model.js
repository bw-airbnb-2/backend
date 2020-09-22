const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};
//TODO Add address, first name, last name, age, birthday, etc to the user model

function find() {
  return db("listings")
    .select(
      "id",
      "userId",
      "name",
      "room_type",
      "minimum_nights",
      "maximum_nights",
      "location",
      "price",
      "accomodates",
      "bathrooms",
      "bedrooms",
      "beds",
      "guests_included"
    )
    .orderBy("id");
}

function findBy(filter) {
  return db("listings").where(filter).orderBy("userId");
}

async function add(listing) {
  try {
    const [id] = await db("listings").insert(listing, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("listings").where({id}).select();
}

function update(changes, id) {
  return db("listings")
    .where({ id })
    .update(changes)
    .then((count) => {
      return findById(id);
    });
}

async function remove(id) {
  const deleted = await findById(id);
  const changes = await db("listings")
      .where({id})
      .del();
  return changes ? deleted : undefined;
};