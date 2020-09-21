
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {userId: 1, name: "Chris", room_type: 'large', min_num_nights: 3, location: "Japan", price: 255.99}
      ]);
    });
};
