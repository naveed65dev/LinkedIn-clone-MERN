import express from 'express';
const router = express.Router();
import { create } from '../controller/experienceController.js';
import verifyToken from '../middleware/verifyToken.js';

// Route for creating experience
router.post('/create/experience',  create);

export default router;
