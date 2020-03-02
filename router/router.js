const router = require('express').Router();
const userRouter = require('../users/user-router.js');

router.use('/users', userRouter);

router.get('/', (req, res) => {
    res.status(200).json({message: "api working"});
})

module.exports = router;