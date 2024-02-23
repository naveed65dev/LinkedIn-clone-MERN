import express from 'express';
const router = express.Router();
import {createSkill} from '../controller/skillController.js';
import passport from 'passport';

// Routes for skillController

router.post('/create/skill', passport.authenticate("jwt", {session: false}), createSkill);


export default router;