const db = require('../data/connection');


module.exports = {
    all,
    add
}

function all(){
    return db('listings')
    .join('users', 'listings.user_id', 'users.id' )
    .join('states', 'listings.state_id', 'states.id')
    .select( 
        'listings.id',
        'title', 
        'description', 
        'price_per_day', 
        'photo_url',
        'latitude',
        'longitude',
        'username as owner',
        'is_land_owner as land_owner',
        'state_name as state', 
        'state_abbreviation as state_abbrv'
    )
    .orderBy('listings.id');
}

function add(listing){
    return db('listings')
    .returning(['id', 'title', 'description', 'price_per_day', 'user_id', 'state_id', 'photo_url' ])
    .insert(listing);
}

