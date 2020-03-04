const router = require('express').Router();
const Reservations = require('./reservations-model');



router.get('/', (req, res) => {
    Reservations.all()
    .then(reservation => {
        res.status(200).json(reservation);
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error fetching reservations.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });

});

router.get('/:id', (req, res) => {
    Reservations.findByReservationId(req.params.id)
    .then(reservation => {
        if(reservation){
            res.status(200).json(reservation);
        }else{
            res.status(404).json({error: 'Reservation by that ID does not exist.'});
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error finding the reservation.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

router.get('/listing/:id', (req, res) => {
    Reservations.findByListingId(req.params.id)
    .then(reservation => {
        if(reservation){
            res.status(200).json(reservation);
        }else{
            res.status(404).json({error: 'Reservation by that listing ID does not exist.'});
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error finding the reservation.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });

});

router.get('/owner/:id', (req, res) => {
    Reservations.findByOwnerId(req.params.id)
    .then(reservation => {
        if(reservation){
            res.status(200).json(reservation);
        }else{
            res.status(404).json({error: 'Reservation for that owner do not exist.'});
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error finding the reservation.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
})

module.exports = router;


