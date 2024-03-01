import Post from '../models/postModel.js';

export const getPost = async (req, res) => {
    try {

      const posts = await Post.find().sort({ timestamp: 'desc' });

      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  export const createPost = async (req, res) => {
    try {
      const { avatar, name, description, content } = req.body;
  
      // Create a new post using the Post model
      const newPost = new Post({
        avatar,
        name,
        description,
        content,
      });
  
      // Save the new post to the MongoDB database
      await newPost.save();
  
      res.status(201).json({ message: 'Post added successfully', status:'true' });
    } catch (error) {
      console.error('Error adding post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };