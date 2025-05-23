import express from 'express';
import { authenticateUser, registerUser } from '../controllers/authController.js'

const router = express.Router();
//http://localhost:5001/api/v0/auth/register
router.post('/register', registerUser);

//http://localhost:5001/api/v0/auth/login
router.post('/login', authenticateUser);

export default router;