
module.exports = (req, res, next) => {
    const {username, password } = req.body;

    if(!username || username.length < 5){

        res.status(400).json({message: "Invalid Entry, username should contain at least 2 characters."});

    }else if(!password || password.length < 6){

        res.status(400).json({message: "Invalid Entry, password should contain at least 6 characters"});

    }else{
        next();
    }
}

