const router = require('express').Router();

const Users = require('./user-model');

router.get('/', (req, res) =>{
    Users.all()
    .then(user => {
        res.status(200).json(user);
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an issue getting users.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
    
});

router.get('/:id', (req, res) => {
   
    Users.findById(req.params.id)
    .then( user => {
        res.status(200).json(user);
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'User does not exist.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
  

});



module.exports = router;