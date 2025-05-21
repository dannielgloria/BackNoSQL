import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import uploadLocal from "../middleware/uploadLocalMiddleware.js"
import { uploadFileFirebase, uploadLocalFile } from "../controllers/fileController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/cloud', protect, upload.single('file'), uploadFileFirebase);

router.post('/local', protect, uploadLocal.single('file'), uploadLocalFile);

export default router;