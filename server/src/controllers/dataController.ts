import { Request, Response } from 'express';
import mockData  from '../data/mockData';

export class DataController {
    public getData(req: Request, res: Response): void {
        res.json(mockData);
    }
}