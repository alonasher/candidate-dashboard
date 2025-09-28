import { Router } from 'express';
import { DataController } from '../controllers/dataController';

const router = Router();
const dataController = new DataController();

export function setDataRoutes(app: Router) {
    app.use('/api/candidates', router);
    router.get('/', dataController.getData.bind(dataController));
}