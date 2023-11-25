import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import generatestory from '../routers/GenerateStory';
import axios from 'axios';

jest.mock('axios');

const app = express();
app.use(bodyParser.json());
app.use(generatestory);
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('POST /generate-story', () => {
  it('should generate a story based on the provided theme', async () => {

    const theme = 'dragão amigável';
    mockedAxios.post.mockResolvedValueOnce({
      data: {
        choices: [{
          text: "Era uma vez, em um reino muito distante, uma pequena vila cercada por montanhas..."
        }]
      }
    });

    const res = await request(app)
      .post('/generate-story')
      .send({ theme });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('story');
    expect(res.body.story).toContain('montanhas');
  });

  it('should respond with status 500 when an error occurs', async () => {
    const theme = 'dragão amigável';
    mockedAxios.post.mockRejectedValueOnce(new Error('Erro ao processar sua solicitação'));

    const res = await request(app)
      .post('/generate-story')
      .send({ theme });

    expect(res.status).toBe(500);
  });
});
