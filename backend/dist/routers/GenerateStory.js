"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Prompt_1 = require("../config/Prompt");
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const router = express_1.default.Router();
dotenv_1.default.config();
/**
 * @openapi
 * /generate-story:
 *   post:
 *     tags:
 *       - Story
 *     description: Generate a story based on a theme.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               theme:
 *                 type: string
 *                 example: A day in the park
 *     responses:
 *       200:
 *         description: Story generated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 story:
 *                   type: string
 *                   example: Once upon a time in a park...
 *       500:
 *         description: Error occurred.
 */
router.post('/generate-story', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { theme } = req.body;
        const maxtoken = 200;
        const prompt = (0, Prompt_1.generateStoryPrompt)(theme, maxtoken);
        const response = yield axios_1.default.post(`${process.env.OPENAI_API_URL}`, {
            model: "gpt-3.5-turbo-instruct",
            prompt: prompt,
            max_tokens: maxtoken,
            temperature: 0.7
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });
        res.json({ story: response.data.choices[0].text });
    }
    catch (error) {
        console.error('Erro ao processar a solicitação:', error);
        res.status(500).json({ error: 'Erro ao processar sua solicitação' });
    }
}));
exports.default = router;
