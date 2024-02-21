import express from 'express';
import {createUser} from '../controller/userController.js';
// import verifyToken from '../middleware/verifyToken.js';
const router = express.Router();

// Routes for userController

router.post('/new/user', createUser);




// router.post('/login',login);
// router.get('/get/conversation', verifyToken, conversation);
// router.get('/get/channel', verifyToken, getChannel);
// router.get('/get/channelList', verifyToken, getAllChannel);

// router.post('/new/message', verifyToken, createNewMessage);

export default router;