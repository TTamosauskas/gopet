import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionControler';
import ContactController from './app/controllers/ContactController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/contact', ContactController.store);

routes.put('/contact', ContactController.update);

routes.put('/users', UserController.update);

export default routes;
