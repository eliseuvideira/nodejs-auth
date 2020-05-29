import { Router } from 'express';

const router = Router();

router.get('/users');

router.post('/users');

router.get('/users/:userId');

router.put('/users/:userId');

router.delete('/users/:userId');

router.get('/users/:userId/permissions');

router.put('/users/:userId/permissions');

export default router;
