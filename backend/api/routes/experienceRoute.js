import express from 'express';
const router = express.Router();
import { create } from '../controller/experienceController.js';
import passport from 'passport';

// Route for creating experience
router.post('/create/experience', passport.authenticate('jwt', { session: false }), create);

export default router;
