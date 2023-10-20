import express from 'express';
import mainController from '../controllers/main';

const router = express.Router();

// Main Controller
router.get('/', mainController.index);

export default router;
