"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const dotenv_1 = __importDefault(require("dotenv"));
const GetVersion_1 = require("./GetVersion");
dotenv_1.default.config();
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Storybook Generator API',
        version: (0, GetVersion_1.getVersion)(),
        description: 'This is a simple API to generate stories based on a theme using OpenAI.',
    },
    servers: [
        {
            url: `${process.env.BACKEND_URL}`
        },
    ],
};
const options = {
    swaggerDefinition,
    apis: ['./src/routers/*.ts'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
