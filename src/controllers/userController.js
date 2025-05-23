import User from "../models/Users.js";

// Logica (1) Recuperar todos los usuarios de mongo con el modelo User
export const getAllUsers = async (req,res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Logica (2) Crear usuario de mongo con el modelo User
export const createUser = async (req,res) => {
    try {
        const user = new User(req.body);
        await user.save()
        res.status(200).json({message: `Usuario ${user.name} fue creado exitosamente`})
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}