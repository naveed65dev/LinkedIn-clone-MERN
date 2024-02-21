import express from 'express';
const router = express.Router();
import {createUser, getUser} from '../controller/userController.js';


// Routes for userController

router.post('/new/user', createUser);
router.get('/get/user', getUser);

export default router;