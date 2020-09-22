const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};
//TODO Add address, first name, last name, age, birthday, etc to the user model

function find() {
  return db("listings")
    .select(
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
    const [userId] = await db("listings").insert(listing, "userId");

    return findById(userId);
  } catch (error) {
    throw error;
  }
}

function findById(userId) {
  return db("listings").where({ userId }).first();
}
