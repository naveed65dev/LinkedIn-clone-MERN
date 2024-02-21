import express from 'express';
const router = express.Router();
import {createUser} from '../controller/userController.js';


// Routes for userController

router.post('/new/user', createUser);


export default router;