import request from 'supertest';
import express from 'express';
import router from '../routers/GenerateStory';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(bodyParser.json());
app.use('/generate-story', router);

describe('POST /generate-story', () => {
  it('should generate a story based on the provided theme', async () => {
    const theme = 'dragão amigável';

    const res = await request(app)
      .post('/generate-story')
      .send({ theme: theme });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('story');
  });

  it('should handle OpenAI API errors gracefully', async () => {
    const theme = 'dragão amigável';

    (axios.post as jest.Mock).mockRejectedValueOnce(new Error('OpenAI API is down'));

    const res = await request(app)
      .post('/api/generate-story')
      .send({ theme });

    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty('error');
  });

});
