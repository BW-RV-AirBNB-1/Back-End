const db = require('../data/connection');

module.exports = {
    all
}

function all(){
    return db('users')
    .select('id', 'username', 'is_land_owner');
}