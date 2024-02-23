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
            type: mongoose.Schema.Types.ObjectId,
            ref: "Experience",
        },
    ],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
        },
    ],
    skills: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skill",
        },
    ],
})
 
export default mongoose.model('User', userSchema);