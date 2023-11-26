import express from "express";
import { generateStoryPrompt } from "../config/Prompt";
import axios from "axios";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

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

router.post('/generate-story', async (req, res) => {
    try {
      const { theme } = req.body;
      const maxtoken = 200;
      const prompt = generateStoryPrompt(theme, maxtoken);

      const response = await axios.post(`${process.env.OPENAI_API_URL}`, {
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
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error);
      res.status(500).json({ error: 'Erro ao processar sua solicitação' });
    }
});

export default router;
