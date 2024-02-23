import jwt  from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();


export const getToken = (email, user) => {
    const token = jwt.sign({ identifier: user._id, email: email }, process.env.SECRETKEY);
    return token;
};