exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cards').del()
        .then(function() {
            // Inserts seed entries
            return knex('cards').insert([
                { id: 1, card_limit: 1000.00, total_usage: 300.00, balance: 700.00 },
                { id: 2, card_limit: 1000.00, total_usage: 400.00, balance: 1600.00 },
                { id: 3, card_limit: 1000.00, total_usage: 500.00, balance: 2500.00 }
            ]);
        });
};