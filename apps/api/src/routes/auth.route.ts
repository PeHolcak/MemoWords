import express, { Router } from 'express';
import { signin, signup, google, signout } from '../controllers/auth.controller';

const router: Router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);
router.get('/signout', signout);

export default router;