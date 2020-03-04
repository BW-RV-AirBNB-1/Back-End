const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./auth-model');
const Token = require('./auth-helpers');

const validateUser = require('../middleware/validateUser');


router.get('/', (req, res) => {
    res.status(200).json({message: '/api/login router working. Please check your METHOD request'});
})

router.post('/', validateUser, (req, res) => {
    const {username, password} = req.body;
    
    Users.findBy({username})
    .first()
    .then(user => {
        
        if(user && bcrypt.compareSync(password, user.password)){

            const token = Token.generateToken(user.username);

            res.status(200).json({user, token});
        }else{
            res.status(400).json({message: 'Invalid Credentials.'})
        }
    })
    .catch(({name, message, stack, code}) => {
        console.log(user);
        res.status(500).json({ 
            error: 'There was an retrieving user.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
})

module.exports = router;