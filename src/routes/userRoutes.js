import express from 'express';
import { getAllUsers, createUser } from '../controllers/userController.js';
import { createPost, getAllPosts } from '../controllers/postController.js';

const router = express.Router();
//http://localhost:5001/api/v0/users
router.route('/').get(getAllUsers).post(createUser);

//http://localhost:5001/api/v0/users/posts
router.route('/posts').get(getAllPosts).post(createPost);

export default router;