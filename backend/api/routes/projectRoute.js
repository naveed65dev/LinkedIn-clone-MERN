import express from 'express';
const router = express.Router();
import {create} from '../controller/projectController.js';
import passport from 'passport';

// Routes for projectController

router.post('/create/project',  passport.authenticate("jwt", {session: false}), create);

export default router;