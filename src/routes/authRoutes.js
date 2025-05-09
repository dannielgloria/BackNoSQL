import express from 'express';
import { registerUser } from '../controllers/authController.js'

const router = express.Router();
//http://localhost:5001/api/v0/auth/register
router.post('/register', registerUser);

//http://localhost:5001/api/v0/users/posts
//router.route('/posts').get(getAllPosts).post(createPost);

export default router;