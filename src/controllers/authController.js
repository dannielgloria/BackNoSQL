import User from "../models/Users.js";
import {keyToken} from "../config/constants.js"
import jwt from "jsonwebtoken";

const generateToken = (id) =>{
    return jwt.sign({id},keyToken, {expiresIn: '30d'});
};

// Logica (1) Registrar un Usuario al sistema
export const registerUser = async (req,res) => {
    const {name, email, password} = req.body;
    const userExist = await User.findOne({email});

    if (userExist) {
        res.status(400).json({ message: 'User already exists'})
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            tokenAcces: generateToken(user._id)
        });
    } else {
        res.status(400).json({message: 'Invalid user data'});
    }
};