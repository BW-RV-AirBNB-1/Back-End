const router = require('express').Router();
const bcrypt = require('bcryptjs');


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
    // .catch(({name, message, stack, code}) => {
    //     res.status(500).json({ 
    //         error: 'User does not exist.',
    //         name: name,
    //         message: message,
    //         stack: stack,
    //         code: code
    //     });
    // });
    .catch(error => (
        res.status(500).json({error: "what happened"})
    ))

});

router.post('/register', (req, res) => {

    Users.add(req.body)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an issue creating account.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });

});



module.exports = router;