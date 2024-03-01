import express from 'express';
const router = express.Router();
import {createPost, getPost} from '../controller/postController.js';
import verifyToken from '../middleware/verifyToken.js';

// Routes for projectController

router.get('/get' ,getPost);
router.post('/create' ,createPost);

export default router;
