import { Router } from 'express';
import indexController from '../controllers/indexController';

const router = Router();

router.get('/test', indexController.test.get)

router.get('/', indexController.index.get)

router.get('/features', indexController.features.get);
router.get('/pricing', indexController.pricing.get);

router.get('/signup', indexController.signup.get);
router.post('/signup', indexController.signup.post);

router.get('/signin', indexController.signin.get);
router.get('/signin', indexController.signin.post);

router.get('/signout', indexController.signout.get);

router.get('/forgot-password', indexController.forgotPassword.get);
router.get('/forgot-password', indexController.forgotPassword.post);

export default router;