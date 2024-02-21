import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
        skillName:{
            type: String,
        },
});

export default mongoose.model('skill', skillsSchema);