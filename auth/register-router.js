const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./auth-model');
const Token = require('./auth-helpers');

const validateUser = require('../middleware/validateUser');


router.get('/', (req, res) => {
    res.status(200).json({message: 'register route working'});
});

router.post('/', validateUser, (req, res) => {
    let user = req.body;
    const token = Token.generateToken(user.username);

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

    Users.add(req.body)
    .then(user => {
        res.status(201).json({user, token});
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an issue creating user.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
})

module.exports = router;