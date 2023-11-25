import express from 'express';
import cors from 'cors';
import { limiter } from './config/RateLimit';
import generatestory from './routers/GenerateStory';

const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(generatestory);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

