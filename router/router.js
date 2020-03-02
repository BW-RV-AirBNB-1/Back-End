const router = require('express').Router();
const authRouter = require('../auth/auth-router');
const userRouter = require('../users/user-router.js');


router.use('/auth', authRouter);
router.use('/users', userRouter);

router.get('/', (req, res) => {
    res.status(200).json({message: "api working"});
});

module.exports = router;