import express from 'express';
import AuthController from './controllers/AuthController';

const router = express.Router();

// router.
router.post('/login',AuthController.logIn);
router.post('/signup',AuthController.signUp);


export default router;