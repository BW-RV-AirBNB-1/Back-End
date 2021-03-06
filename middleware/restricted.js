const jwt = require('jsonwebtoken');

module.exports = (req, res, next ) => {

    const {authorization} = req.headers;

    if(authorization){
        const secret = process.env.JWT_SECRET;

        jwt.verify(authorization, secret, (err, decodedToken) => {
            if(err){
                res.status(401).json({message: 'Invalid Credentials.'});
            }else{
                req.decodedToken = decodedToken;
                next();
            }
        });
    }else{
        res.status(400).json({message: "No credentials provided."});
    }
};