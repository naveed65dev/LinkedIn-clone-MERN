import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  avatar: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  description: String,
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('post', postSchema);
