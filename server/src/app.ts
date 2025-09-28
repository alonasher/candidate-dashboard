import express from 'express';
import cors from 'cors';
import { setDataRoutes } from './routes/dataRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

setDataRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});