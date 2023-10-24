import express from 'express';
import v1Router from './v1Router';
import v2Router from './v2Router';
const router = express.Router();

// Main Controller
router.use('/v1', v1Router);
router.use('/v2', v2Router);
export default router;
