const db = require('../data/connection');

module.exports = {
    add,
    findBy
}

function add(user){
    return db('users')
    .returning(['id', 'username', 'is_land_owner'])
    .insert(user);
}


function findBy(filter){
    return db('users').where(filter);
}
