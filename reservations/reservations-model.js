const db = require('../data/connection');

module.exports = {
    all,
    findByReservationId,
    findByListingId,
    findByOwnerId

}


function all(){
    return db('reservations').select('*');
};

function findByReservationId(id){
    return db('reservations')
    .join('users', 'reservations.user_id', 'users.id')
    .join('listings', 'reservations.listing_id', 'listings.id')
    .join('states', 'listings.state_id', 'states.id')
    .select(
        'listing.id',
        'username as reservation_name', 
        'state_name as state',
        'title',
        'description',
        'is_reserved as reserved',
        'date_from as reserved_from',
        'date_to as reserved_to'
        )
    .where('reservation.id', id);
}

function findByListingId(id){
    return db('reservations')
    .join('users', 'reservations.user_id', 'users.id')
    .join('listings', 'reservations.listing_id', 'listings.id')
    .join('states', 'listings.state_id', 'states.id')
    .select(
        'listing.id',
        'username as reservation_name', 
        'state_name as state',
        'title',
        'description',
        'is_reserved as reserved',
        'date_from as reserved_from',
        'date_to as reserved_to'
        )
    .where('reservation.listing_id', id);
}

function findByOwnerId(id){
    return db('reservations')
    .join('users', 'reservations.user_id', 'users.id')
    .join('listings', 'reservations.listing_id', 'listings.id')
    .join('states', 'listings.state_id', 'states.id')
    .select(
        'listing.id',
        'username as reservation_name', 
        'state_name as state',
        'title',
        'description',
        'is_reserved as reserved',
        'date_from as reserved_from',
        'date_to as reserved_to'
        )
    .where('listing.user_id', id);
}