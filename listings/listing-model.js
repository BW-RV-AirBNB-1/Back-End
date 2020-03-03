const db = require('../data/connection');


module.exports = {
    all,
    add
}

function all(){

}

function add(listing){
    return db('listings')
    .returning(['id', 'title', 'description', 'price_per_day', 'user_id', 'state_id', 'photo_url' ])
    .insert(listing);
}