const db = require('../data/connection');

module.exports = {
    add
}

function add(user){
    return db('users')
    .returning(['id', 'username', 'is_land_owner'])
    .insert(user);
}
