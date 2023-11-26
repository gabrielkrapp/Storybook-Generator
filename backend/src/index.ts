import express from 'express';
import cors from 'cors';
import { limiter } from './config/RateLimit';
import generatestory from './routers/GenerateStory';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(limiter);
app.use(generatestory);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

