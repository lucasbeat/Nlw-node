import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveyController';

const userController = new UserController();
const surveysController = new SurveysController();

const routes = Router();

routes.post('/users', userController.create);

routes.post('/surveys', surveysController.create);
routes.get('/surveys', surveysController.show);

export { routes }