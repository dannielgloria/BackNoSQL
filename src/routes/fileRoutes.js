import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadFileFirebase } from "../controllers/fileController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/cloud', protect, upload.single('file'), uploadFileFirebase)

export default router;