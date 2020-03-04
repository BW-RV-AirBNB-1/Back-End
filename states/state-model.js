const db = require('../data/connection');

module.exports = {
    all,
    findById,
    findListingsByState
}


function all(){
    return db('states').select('*');
}

function findById(id){
    return db('states')
    .select('*')
    .where('id', id);
}

function findListingsByState(id){
    return db('states')
    .join('listings', 'states.id', 'listings.state_id')
    .join('users', 'listings.user_id', "users.id")
    .select(
        'listings.id as listing_id',
        'username as owner_name',
        'listings.title',
        'listings.description',
        'listings.price_per_day',
        'listings.photo_url',
        'listings.longitude',
        'listings.latitude',
        'state_name',
        'state_abbreviation'
        )
    .where('states.id', id)
}