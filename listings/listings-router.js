const router = require('express').Router();
const Listings = require('./listing-model');

router.get('/', (req, res) =>{
    Listings.all()
    .then(listing => {
        res.status(200).json(listing)
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an getting the listings.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

router.post('/', (req, res) => {
    Listings.add(req.body)
    .then(listing => {
        res.status(200).json(listing)
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an issue creating listing.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
})


module.exports = router;