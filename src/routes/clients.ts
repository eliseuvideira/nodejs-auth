import { Router } from 'express';

const router = Router();

router.get('/clients');

router.post('/clients');

router.get('/clients/:clientId');

router.put('/clients/:clientId');

router.delete('/clients/:clientId');

export default router;
