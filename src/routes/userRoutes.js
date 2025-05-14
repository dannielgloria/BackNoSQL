import express from 'express';
import { getAllUsers, createUser } from '../controllers/userController.js';
import { createPost, getAllPosts } from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';
import { userValidation } from '../middleware/userValidationMiddleware.js';

const router = express.Router();
//http://localhost:5001/api/v0/users
router.route('/').get(protect, getAllUsers).post(userValidation,createUser);

//http://localhost:5001/api/v0/users/posts
router.route('/posts').get(protect, getAllPosts).post(createPost);

export default router;