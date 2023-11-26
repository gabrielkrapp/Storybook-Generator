import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from "dotenv";
import { getVersion } from './GetVersion';

dotenv.config();

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Storybook Generator API',
    version: '1.1.1',
    description: 'This is a simple API to generate stories based on a theme using OpenAI.',
  },
  servers: [
    {
      url: `${process.env.BACKEND_URL}`
    },
  ],
};

const options: swaggerJsdoc.Options = {
  swaggerDefinition,
  apis: ['./src/routers/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
