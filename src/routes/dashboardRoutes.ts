import { Router } from 'express';
import dashboardController from '../controllers/dashboardController';

const router = Router();

router.get('/', dashboardController.index.get);

router.get('/messages', dashboardController.messages.index.get);
router.get('/messages/:id', dashboardController.messages.detail.get);

router.get('/profile', dashboardController.profile.get);

router.get('/settings', dashboardController.settings.get);
router.post('/settings', dashboardController.settings.post);

export default router;