const Users = require('./user-model');
const router = require('express').Router();




router.get('/', (req, res) =>{
    Users.all()
    .then(user => {
        res.status(200).json({ data:  user});
    })
    .catch(error =>{
        res.status(500).json({error: "There was an issue getting users."});
    })
})

module.exports = router;