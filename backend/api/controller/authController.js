import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { getToken } from '../utils/helper.js';

// Create a new user

export const registerUser = async (req, res) => {

    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !email || !password) {
        return res.status(400).json({err: "Invalid request body"});
    }

    const existingUser = await User.findOne({email: email});

    if(existingUser) {
        return res.status(402).json({err: "A user with this email already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserDetails = {firstName, lastName, password: hashedPassword, email};
    const newUser = await User.create(newUserDetails);

    const token = getToken(email, newUser);
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
};

//login 

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({ err: "Invalid username or password" });
    }

 
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(401).json({ err: "Invalid username or password" });
    }
 
    const isPasswordValid = bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ err: "Invalid username or password" });
    }

    const token = getToken(email, user);
    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
};
