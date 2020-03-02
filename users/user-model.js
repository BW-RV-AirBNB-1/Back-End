const db = require('../data/connection');

module.exports = {
    all,
    add,
    findBy,
    findById
}

function all(){
    return db('users')
    .select('id', 'username', 'is_land_owner');
}

function findBy(filter){
    return db('users')
    .select('id', 'username', 'is_land_owner')
    .where(filter)
}

function findById(id){
    return db('users')
    .select('id', 'username', 'is_land_owner')
    .where('users.id', id);
}

function add(user){
    return db('users')
    .returning(['id', 'username', 'is_land_owner'])
    .insert(user);
}


