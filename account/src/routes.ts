import express from 'express';
import UserController from './controllers/UserController';

const router = express.Router();

// router.
router.post('/user/register',UserController.register);


export default router;