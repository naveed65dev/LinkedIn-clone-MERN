import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true,
        },
        description:{
            type: String,
            require: false,
        },
        links:[
            {
            type: String,
        },
    ],
        
});

export default mongoose.model('project', projectSchema);