"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const RateLimit_1 = require("./config/RateLimit");
const GenerateStory_1 = __importDefault(require("./routers/GenerateStory"));
// import swaggerUi from 'swagger-ui-express';
// import swaggerSpec from './swagger/swagger';
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(RateLimit_1.limiter);
app.use(GenerateStory_1.default);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
