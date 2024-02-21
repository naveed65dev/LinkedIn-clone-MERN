import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
        companyName: {
            type: String,
            require: true,
        },
        position:{
            type: String,
            require: true,
        },
        startDate:{
            type: Date,
            require: false,
        },
        endDate:{
            type: Date,
            require: false,
        },
        description:{
            type: String,
            require: false,
        },
});

export default mongoose.model('experience', experienceSchema);