import express from 'express';
const router = express.Router();
import {create} from '../controller/projectController.js';
import verifyToken from '../middleware/verifyToken.js';

// Routes for projectController

router.post('/create/project',  create);

export default router;