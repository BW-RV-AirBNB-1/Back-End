const db = require('../data/connection');

module.exports = {
    all,
    add,
    findByReservationId,
    findByListingId,
    findByOwnerId

}

//GET ALL Reservations
function all(){
    return db('reservations')
    .select('*')
    .orderBy('reservations.date_from', 'desc');
    
};

//FIND Reservations by its ID
function findByReservationId(id){
    return db('reservations')
    .join('users', 'reservations.user_id', 'users.id')
    .join('listings', 'reservations.listings_id', 'listings.id')
    .join('states', 'listings.state_id', 'states.id')
    .select(
        'reservations.id as reservation_id',
        'listings.id as listing_id',
        'username as reservation_name', 
        'state_name as state',
        'title',
        'description',
        'is_reserved as reserved',
        'date_from as reserved_from',
        'date_to as reserved_to'
        )
    .where('reservations.id', id);
}

//FIND reservation by the listing ID
function findByListingId(id){
    return db('reservations')
    .join('users', 'reservations.user_id', 'users.id')
    .join('listings', 'reservations.listings_id', 'listings.id')
    .join('states', 'listings.state_id', 'states.id')
    .select(
        'reservations.id as reservation_id',
        'listings.id as listing_id',
        'username as reservation_name', 
        'state_name as state',
        'title',
        'description',
        'is_reserved as reserved',
        'date_from as reserved_from',
        'date_to as reserved_to'
        )
    .where('reservations.listings_id', id);
}

//FIND all reservations for property owner.
function findByOwnerId(id){
    return db('reservations')
    .join('users', 'reservations.user_id', 'users.id')
    .join('listings', 'reservations.listings_id', 'listings.id')
    .join('states', 'listings.state_id', 'states.id')
    .select(
        'reservations.id as reservation_id',
        'listings.id',
        'username as reservation_name', 
        'state_name as state',
        'title',
        'description',
        'is_reserved as reserved',
        'date_from as reserved_from',
        'date_to as reserved_to'
        )
    .where('listings.user_id', id)
    .orderBy('reservations.date_from', 'desc');
};

//ADD a reservation
function add(body){
    return db('reservations')
    .returning(['id', 'is_reserved', 'date_from', 'date_to'])
    .insert(body);
}