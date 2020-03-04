const router = require('express').Router();
const States = require('./state-model');



router.get('/', (req, res) => {
    States.all()
    .then(state => {
        if(state){
            res.status(200).json(state);
        }else{
            res.status(404).json({message: "There are isn't any state data."});
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error fetching the state data.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

router.get('/:id', (req, res) => {
    States.findById(req.params.id)
    .then(state => {
        if(state){
            res.status(200).json(state);
        }else{
            res.status(404).json({Error: 'State by that ID does not exist.'});
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error fetching the state data.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

router.get('/location/:id', (req, res) => {
    States.findListingsByState(req.params.id)
    .then(state => {
        res.status(200).json(state);
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error fetching the state data.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
})


module.exports =  router;