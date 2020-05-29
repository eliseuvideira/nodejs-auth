import { Router } from 'express';

const router = Router();

router.post('/signin');

router.post('/signout');

router.post('/signup');

router.post('/reset-password');

router.post('/change-password');

router.post('/verify-email');

router.post('/auth/refresh-token');

router.post('/auth/access-token');

export default router;
