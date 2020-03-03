const db = require('../data/connection');


module.exports = {
    all,
    add,
    update,
    del,
    findListingById,
    findListingByOwnerId
}


//GET ALL LISTINGS
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

//FIND LISTING BY LISTING ID
function findListingById(id){
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
    .where('listings.id', id);
};

//FIND LISTINGS BY OWNER ID
function findListingByOwnerId(id){
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
    .where('listings.user_id', id);
};

//POST OR CREATE A NEW LISTING
function add(listing){
    return db('listings')
    .returning(['id', 'title', 'description', 'price_per_day', 'user_id', 'state_id', 'photo_url', 'longitude', 'latitude'])
    .insert(listing);
}


//PUT or Update a listing
function update(id, body){

    return db('listings')
    .where('id', id)
    .returning(['id', 'title', 'description', 'price_per_day', 'user_id', 'state_id', 'photo_url', 'longitude', 'latitude'])
    .update(body);
    
}

//DELETE LISTING
function del(id){
    return db('listings')
    .where('id', id)
    .del();
}
