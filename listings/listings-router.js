const router = require('express').Router();
const Listings = require('./listing-model');
const validateListing = require('../middleware/validateListing');

router.get('/', (req, res) =>{
    Listings.all()
    .then(listing => {
        res.status(200).json(listing)
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error fetching the listings.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

router.get('/:id', (req, res) => {
    Listings.findListingById(req.params.id)
    .then(listing => {

        if(listing){
            res.status(200).json(listing)
        }else{
            res.status(404).json({message: 'Listing cannot be found.'})
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error fetching the listing.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

router.get('/owner/:id', (req, res) => {
    Listings.findListingByOwnerId(req.params.id)
    .then(listing => {
        if(listing){
            res.status(200).json(listing);
        }else{
            res.status(404).json({message: 'Listings for that owner does not exist.'})
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: `There was an error fetching owner's listings.`,
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
})

router.post('/', validateListing, (req, res) => {
    Listings.add(req.body)
    .then(listing => {
        res.status(200).json(listing)
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error creating listing.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

router.put('/:id', validateListing, (req, res) => {
    Listings.update(req.params.id, req.body)
    .then(listing => {
        if(listing){
            res.status(200).json(listing);
        }else{
            res.status(404).json({message: 'Listing does not exist.'})
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error updating listing.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

router.delete('/:id', (req, res) => {
        Listings.del(req.params.id)
        .then(listing => {
            if(listing){
                res.status(200).json({message: `Listing ID: ${req.params.id} deleted.`});
            }else{
                res.status(404).json({message: 'Listing does not exist.'})
            }   
        })
        .catch(({name, message, stack, code}) => {
            res.status(500).json({ 
                error: 'There was an error deleting listing.',
                name: name,
                message: message,
                stack: stack,
                code: code
            });
        });
})



module.exports = router;