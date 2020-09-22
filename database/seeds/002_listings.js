exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("listings")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("listings").insert([
        {
          userId: 1,
          name: "Chris",
          room_type: "large",
          location: "Japan",
          price: 255.99,
          accomodates: 3,
          bathrooms: 2,
          bedrooms: 2,
          beds: 3,
          guests_included: 2,
          minimum_nights: 3,
          maximum_nights: 6
        },
      ]);
    });
};
