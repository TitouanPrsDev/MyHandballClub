import { Router } from 'express';
import apiController from '../controllers/apiController';

const router = Router();

router.get('/', apiController.index.get);
router.get('/docs', apiController.docs.get);
router.get('/status', apiController.status.get);

router.get('/database/user', apiController.database.user.list);
router.get('/database/user/:id', apiController.database.user.detail);

router.get('/database/club', apiController.database.club.list);
router.get('/database/club/:id', apiController.database.club.detail);

router.get('/database/committee', apiController.database.committee.list);
router.get('/database/committee/:id', apiController.database.committee.detail);

router.get('/database/league', apiController.database.league.list);
router.get('/database/league/:id', apiController.database.league.detail);

export default router;