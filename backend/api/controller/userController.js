import User from '../models/userModel.js';
 
// Create a new user

export const createUser = async (req, res) => {
    try {
    
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};

