import express from 'express';
const router = express.Router();
import {createSkill} from '../controller/skillController.js';
import verifyToken from '../middleware/verifyToken.js';

// Routes for skillController

router.post('/create/skill',createSkill);


export default router;