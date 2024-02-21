import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: false,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    experiences: [
        {
            type: String,
        },
    ],
    projects: [
        {
            type: String,
        },
    ],
    skills: [
        {
            type: String,
        },
    ],
})

export default mongoose.model('User', userSchema);