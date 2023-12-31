import express from 'express';
import cors from 'cors';
import { limiter } from './config/RateLimit';
import generatestory from './routers/GenerateStory';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger';
import { corsOptions } from './config/CorsOptions';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳');
});
app.use(limiter);
app.use(generatestory);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

