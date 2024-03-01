import express from 'express';
const router = express.Router();
import {login} from '../controller/authController.js';


// Routes for userController

// router.post('/register', registerUser);
router.post('/login', login);

export default router;