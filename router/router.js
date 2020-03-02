const router = require('express').Router();
const registerRouter = require('../auth/register-router');
const userRouter = require('../users/user-router.js');


router.use('/register', registerRouter);
router.use('/users', userRouter);

router.get('/', (req, res) => {
    res.status(200).json({message: "api working"});
});

module.exports = router;