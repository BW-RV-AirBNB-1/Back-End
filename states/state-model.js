const db = require('../data/connection');

module.exports = {
    all,
    findById
}


function all(){
    return db('states').select('*');
}

function findById(id){
    return db('states')
    .select('*')
    .where('id', id);
}