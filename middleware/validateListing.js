module.exports = (req, res, next) => {

    const {title, description, price_per_day} = req.body;

    if(title.length === 0 || title === ""){

        res.status(400).json({message: "Invalid Entry. Please enter a valid title."});

    }else if(description.length === 0 || description === ""){

        res.status(400).json({message: "Invalid Entry. Please enter a valid description."});

    }else if(price_per_day.length === 0 || price_per_day === "" ){

        res.status(400).json({message: "Invalid Entry. Please enter a valid price amount."});

    }else{
        next();
    };
};